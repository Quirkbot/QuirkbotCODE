/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var polybuild = require('polybuild');
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var merge = require('merge-stream');
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var historyApiFallback = require('connect-history-api-fallback');

var AUTOPREFIXER_BROWSERS = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

var styleTask = function (stylesPath, srcs) {
	return gulp.src(srcs.map(function(src) {
		return path.join('app', stylesPath, src);
	}))
	.pipe($.changed(stylesPath, {extension: '.css'}))
	.pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
	.pipe(gulp.dest('.tmp/' + stylesPath))
	.pipe($.if('*.css', $.cssmin()))
	.pipe(gulp.dest('dist/' + stylesPath))
	.pipe($.size({title: stylesPath}));
};

// Compile and Automatically Prefix Stylesheets
gulp.task('styles', function () {
	return styleTask('styles', ['**/*.css']);
});

gulp.task('elements', function () {
	return styleTask('elements', ['**/*.css']);
});

// Lint JavaScript
gulp.task('jshint', function () {
	return gulp.src([
		'app/scripts/**/*.js',
		'app/elements/**/*.js',
		'app/elements/**/*.html'
	])
	.pipe(reload({stream: true, once: true}))
	.pipe($.jshint.extract()) // Extract JS from .html files
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish'))
	.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize Images
gulp.task('images', function () {
	return gulp.src('app/images/**/*')
	/*.pipe($.cache($.imagemin({
		progressive: true,
		interlaced: true
	})))*/
	.pipe(gulp.dest('dist/images'))
	.pipe($.size({title: 'images'}));
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function () {
	var app = gulp.src([
	'app/*',
	'!app/test',
	'!app/precache.json'
	], {
	dot: true
	}).pipe(gulp.dest('dist'));

	var data = gulp.src([
	'app/data/**/*'
	]).pipe(gulp.dest('dist/data'));

	var bower = gulp.src([
	'bower_components/**/*'
	]).pipe(gulp.dest('dist/bower_components'));

	var elements = gulp.src(['app/elements/**/*.html'])
	.pipe(gulp.dest('dist/elements'));

	var swBootstrap = gulp.src(['bower_components/platinum-sw/bootstrap/*.js'])
	.pipe(gulp.dest('dist/elements/bootstrap'));

	var swToolbox = gulp.src(['bower_components/sw-toolbox/*.js'])
	.pipe(gulp.dest('dist/sw-toolbox'));

	var vulcanized = gulp.src(['app/elements/elements.html'])
	.pipe($.rename('elements.vulcanized.html'))
	.pipe(gulp.dest('dist/elements'));

	return merge(app, data, bower, elements, vulcanized, swBootstrap, swToolbox)
	.pipe($.size({title: 'copy'}));
});

// Copy Web Fonts To Dist
gulp.task('fonts', function () {
	return gulp.src(['app/fonts/**'])
	.pipe(gulp.dest('dist/fonts'))
	.pipe($.size({title: 'fonts'}));
});

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
	var assets = $.useref.assets({searchPath: ['.tmp', 'app', 'dist']});

	return gulp.src(['app/**/*.html','app/**/*.css','app/**/*.js'])
	// Replace path for vulcanized assets
	.pipe($.if('*.html', $.replace('elements/elements.html', 'elements/elements.vulcanized.build.html')))
	// Replace path for minimized webcomponentsjs
	.pipe($.if('*.html', $.replace('bower_components/webcomponentsjs/webcomponents-lite.js', 'bower_components/webcomponentsjs/webcomponents-lite.min.js')))
	.pipe(assets)
	// Concatenate And Minify JavaScript
	.pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
	// Concatenate And Minify Styles
	// In case you are still using useref build blocks
	.pipe($.if('*.css', $.cssmin()))
	.pipe(assets.restore())
	.pipe($.useref())
	// Minify Any HTML
	.pipe($.if('*.html', $.minifyHtml()))
	// Output Files
	.pipe(gulp.dest('dist'))
	.pipe($.size({title: 'html'}));
});

// Add revision based on the app mainfest
gulp.task('revision', function () {
	var fs = require('fs');
	var manifest = JSON.parse(fs.readFileSync('dist/manifest.json'));
	return gulp.src(['dist/**/*.html'])
		.pipe($.replace('elements.vulcanized.build.html', 'elements.vulcanized.build.html?'+manifest.version))
		.pipe($.replace('elements.vulcanized.build.js', 'elements.vulcanized.build.js?'+manifest.version))
		.pipe($.replace('data/nodes.json', 'data/nodes.json?'+manifest.version))
		.pipe($.replace('data/strings/{{locale}}.json', 'data/strings/{{locale}}.json?'+manifest.version))
		.pipe(gulp.dest('dist'))
		.pipe($.size({title: 'revision'}));
});

// Polybuild
gulp.task('polybuild', function () {
	var DEST_DIR = 'dist/elements';

	return gulp.src('dist/elements/elements.vulcanized.html')
	.pipe(polybuild({maximumCrush: true}))
	.pipe(gulp.dest(DEST_DIR))
	.pipe($.size({title: 'polybuild'}));
});

// Generate a list of files that should be precached when serving from 'dist'.
// The list will be consumed by the <platinum-sw-cache> element.
gulp.task('precache', function (callback) {
	var dir = 'dist';

	glob('{elements,scripts,styles}/**/*.*', {cwd: dir}, function(error, files) {
	if (error) {
		callback(error);
	} else {
		files.push('index.html', './', 'bower_components/webcomponentsjs/webcomponents-lite.min.js');
		var filePath = path.join(dir, 'precache.json');
		fs.writeFile(filePath, JSON.stringify(files), callback);
	}
	});
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'static', 'static_stage']));

// Watch Files For Changes & Reload
gulp.task('serve', ['styles', 'elements', 'images'], function () {
	browserSync({
	notify: false,
	logPrefix: 'PSK',
	snippetOptions: {
		rule: {
		match: '<span id="browser-sync-binding"></span>',
		fn: function (snippet) {
			return snippet;
		}
		}
	},
	// Run as an https by uncommenting 'https: true'
	// Note: this uses an unsigned certificate which on first access
	//		 will present a certificate warning in the browser.
	// https: true,
	server: {
		baseDir: ['.tmp', 'app'],
		middleware: [ historyApiFallback() ],
		routes: {
		'/bower_components': 'bower_components'
		}
	}
	});

	gulp.watch(['app/**/*.html'], reload);
	gulp.watch(['app/styles/**/*.css'], ['styles', reload]);
	gulp.watch(['app/elements/**/*.css'], ['elements', reload]);
	gulp.watch(['app/{scripts,elements}/**/*.js'], ['jshint']);
	gulp.watch(['app/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], function () {
	browserSync({
	notify: false,
	logPrefix: 'PSK',
	snippetOptions: {
		rule: {
		match: '<span id="browser-sync-binding"></span>',
		fn: function (snippet) {
			return snippet;
		}
		}
	},
	// Run as an https by uncommenting 'https: true'
	// Note: this uses an unsigned certificate which on first access
	//		 will present a certificate warning in the browser.
	// https: true,
	server: 'dist',
	middleware: [ historyApiFallback() ]
	});
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
	runSequence(
	['copy', 'styles'],
	'elements',
	['jshint', 'images', 'fonts', 'html'],
	'polybuild',
	'revision',
	cb);
	// Note: add , 'precache' , after 'vulcanize', if your are going to use Service Worker
});

// STATIC ----------------------------------------------------------------------
gulp.task('static-copy', function () {
	return gulp.src(['dist/**/*'])
	.pipe(gulp.dest('static/_static'))
	.pipe($.size({title: 'static-copy'}));
});
gulp.task('static-clean',
	del.bind(null, [
		'static/_static/bower_components/**/*',

		'!static/_static/bower_components/ace-element',
		 'static/_static/bower_components/ace-element/**/*',
		'!static/_static/bower_components/ace-element/src-min-noconflict',
		 'static/_static/bower_components/ace-element/src-min-noconflict/**/*',
		'!static/_static/bower_components/ace-element/src-min-noconflict/mode-c_cpp.js',
		'!static/_static/bower_components/ace-element/src-min-noconflict/theme-monokai.js',

		'!static/_static/bower_components/webcomponentsjs',
		 'static/_static/bower_components/webcomponentsjs/**/*',
		'!static/_static/bower_components/webcomponentsjs/webcomponents-lite.min.js',

		 'static/_static/elements/**/*',
		'!static/_static/elements/elements.vulcanized.build.html',
		'!static/_static/elements/elements.vulcanized.build.js'
	]
));
gulp.task('static-root-path', function () {
	return gulp.src(['static/_static/index.html','static/_static/404.html'])
	.pipe($.replace('./data', './_static/data'))
	.pipe($.replace('./bower_components', './_static/bower_components'))
	.pipe($.replace('./elements', './_static/elements'))
	.pipe($.replace('./fonts', './_static/fonts'))
	.pipe($.replace('./images', './_static/images'))
	.pipe($.replace('./scripts', './_static/scripts'))
	.pipe($.replace('./styles', './_static/styles'))
	.pipe(gulp.dest('static/_static'))
	.pipe($.size({title: 'static-root-path'}));
});
gulp.task('static-path', function () {
	return gulp.src(['static/_static/_static_*.html'])
	// Replace path for static entrypoints
	.pipe($.replace('./data', '../_static/data'))
	.pipe($.replace('./bower_components', '../_static/bower_components'))
	.pipe($.replace('./elements', '../_static/elements'))
	.pipe($.replace('./fonts', '../_static/fonts'))
	.pipe($.replace('./images', '../_static/images'))
	.pipe($.replace('./scripts', '../_static/scripts'))
	.pipe($.replace('./styles', '../_static/styles'))
	.pipe(gulp.dest('static/_static'))
	.pipe($.size({title: 'static-path'}));
});
gulp.task('static-replace', function () {
	return gulp.src(['static/_static/*.html'])
	// Replace any referect to the html files to the correct folder
	.pipe($.replace(/_static_([^.]*).html/g, '/$1'))
	.pipe($.replace(/index.html/g, '/'))
	.pipe(gulp.dest('static/_static'))
	.pipe($.size({title: 'static-replace'}));
});
gulp.task('static-root-entrypoints', function () {
	return gulp.src(['static/_static/index.html','static/_static/404.html'])
		.pipe(gulp.dest('static'))
		.pipe($.size({title: 'static-root-entrypoints'}));
});
gulp.task('static-entrypoints', function () {
	return gulp.src('static/_static/_static_*.html')
	.pipe($.rename(function (path) {
		path.basename = path.basename.replace('_static_', '') + '/index';
	}))
	.pipe(gulp.dest('static/'))
	.pipe($.size({title: 'static-entrypoints'}));
});
gulp.task('static-copy-stage', function () {
	return gulp.src(['static/**/*'])
	.pipe(gulp.dest('static_stage'))
	.pipe($.size({title: 'static-copy-stage'}));
});
// Replace configuration attributes based on the config file
gulp.task('static-config', function () {
	var fs = require('fs');
	var config = JSON.parse(fs.readFileSync('app/config.json')).production;

	return gulp.src([
		'static/**/index.html',
		'static/**/404.html',
	])
	.pipe($.replace(/api-url="([^"]*)"/g, 'api-url="'+config['api-url'] +'"' ))
	.pipe($.replace(/compiler-url="([^"]*)"/g, 'compiler-url="'+config['compiler-url'] +'"' ))
	.pipe(gulp.dest('static'))
	.pipe($.size({title: 'static-config'}));
});
gulp.task('static-config-stage', function () {
	var fs = require('fs');
	var config = JSON.parse(fs.readFileSync('app/config.json')).stage;

	return gulp.src([
		'static_stage/**/index.html',
		'static_stage/**/404.html',
	])
	.pipe($.replace(/api-url="([^"]*)"/g, 'api-url="'+config['api-url'] +'"' ))
	.pipe($.replace(/compiler-url="([^"]*)"/g, 'compiler-url="'+config['compiler-url'] +'"' ))
	.pipe(gulp.dest('static_stage'))
	.pipe($.size({title: 'static-config-stage'}));
});

gulp.task('static-gzip', function () {
	return gulp.src([
		'static/**/*.html',
		'static/**/*.js',
		'static/**/*.css',
		'static/**/*.json',
		'static/**/*.svg',
		'static/**/*.woff2'
	])
	.pipe($.gzip({ append: false }))
	.pipe(gulp.dest('static'))
	.pipe($.size({title: 'static-gzip'}));
});
gulp.task('static-gzip-stage', function () {
	return gulp.src([
		'static_stage/**/*.html',
		'static_stage/**/*.js',
		'static_stage/**/*.css',
		'static_stage/**/*.json',
		'static_stage/**/*.svg',
		'static_stage/**/*.woff2'
	])
	.pipe($.gzip({ append: false }))
	.pipe(gulp.dest('static_stage'))
	.pipe($.size({title: 'static-gzip-stage'}));
});
// Static task
gulp.task('static', ['default'], function (cb) {
	runSequence(
	'static-copy',
	'static-clean',
	'static-root-path',
	'static-path',
	'static-replace',
	'static-entrypoints',
	'static-root-entrypoints',
	'static-copy-stage',
	'static-config',
	'static-config-stage',
	cb);
});
gulp.task('gzip-static', ['default'], function (cb) {
	runSequence(
	'static',
	'static-gzip',
	'static-gzip-stage',
	cb);
});
// end STATIC -------------------------------------------------------------------


// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
require('web-component-tester').gulp.init(gulp);

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
