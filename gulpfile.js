'use strict';

var path = require('path');
var fs = require('fs');
var glob = require('glob');
var polybuild = require('polybuild');
var browserSync = require('browser-sync');
var argv = require('yargs').default('environment', 'development').argv;
var reload = browserSync.reload;
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var merge = require('merge-stream');
var runSequence = require('run-sequence');
var streamqueue = require('streamqueue')
var del = require('del');

var historyApiFallback = require('connect-history-api-fallback');

var SRC = 'src';
var DEST_DEV = 'dist_dev';
var DEST_POLYMER = 'dist_polymer';
var DEST_GZIP = 'dist_gzip';

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


/**
 * Lint JavaScript fom SRC
 */
gulp.task('jshint', function () {
	return gulp.src([
		SRC + '/assets/elements/**/*.js',
		SRC + '/assets/elements/**/*.html',
	])
	.pipe(reload({stream: true, once: true}))
	.pipe($.jshint.extract()) // Extract JS from .html files
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish'))
	.pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});
/**
 * Lint JavaScript fom SRC (this won't fail, so it's good for the dev environment)
 */
gulp.task('soft-jshint', function () {
	return gulp.src([
		SRC + '/assets/elements/**/*.js',
		SRC + '/assets/elements/**/*.html',
	])
	.pipe($.jshint.extract()) // Extract JS from .html files
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish'))
});

/**
 * Create the language files from the master.csv
 */
gulp.task('language-files', function (cb) {
	var fs = require('fs');
	var parse = require('csv-parse');

	var parser = parse({delimiter: ','}, function (err, data) {
		var header = data[0];
		var languageKeys = header.slice(1)
		var languages = languageKeys.map(function(key) {
			return {
				key: key,
				translations: {}
			}
		})
		data.forEach(function(line) {
			languages.forEach(function(language, index) {
				language.translations[line[0]] = line[index+1]
			})
		})
		languages.forEach(function(language) {
			// Add Jekyll's "front matter"
			var content = '---\nlayout: null\nlang: ' + language.key + '\n---\n{% include f_external_services %}\n';
			content += JSON.stringify(language.translations, null, '\t');
			fs.writeFileSync(
				path.resolve(SRC, 'data', 'strings', language.key + '.json'),
				content,
				'utf8'
			);
		})

		cb();
	});
	fs.createReadStream(path.resolve(SRC, 'data', 'strings', 'master.csv')).pipe(parser);
});
/**
 * Update manifest version (using the version from package.json)
 */
gulp.task('manifest-version', function () {
	var fs = require('fs');
	var packageJson = JSON.parse(fs.readFileSync('package.json'));

	return gulp.src(SRC + '/manifest.json')
	.pipe($.jsonEditor({version: packageJson.version}))
	.pipe(gulp.dest(SRC),{ overwrite: true })
});
/**
 * Runs Jekyll using --source SRC --destination DEST_DEV
 */
gulp.task('jekyll', function (gulpCallBack){
	var environment;
	if(!argv.environment){
		environment = 'development';
	}
	else {
		environment = argv.environment;
	}

	var spawn = require('child_process').spawn;
	var jekyll = spawn(
		'jekyll', ['build', '--source', SRC, '--destination', DEST_DEV],
		{
			stdio: 'inherit',
			env: {
				PATH: process.env.PATH,
				JEKYLL_ENV: environment
			}
		}
	);
	jekyll.on('exit', function(code) {
		gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
	});
});

/**
 * Copies prepare files for polymer, from DEST_DEV to DEST_POLYMER
 */
gulp.task('polymer-copy', function () {
	var app = gulp.src([ DEST_DEV + '/**/*'])
	.pipe(gulp.dest(DEST_POLYMER));

	var swBootstrap = gulp.src([DEST_DEV + '/assets/bower_components/platinum-sw/bootstrap/*.js'])
	.pipe(gulp.dest(DEST_POLYMER + '/assets/elements/bootstrap'));

	var swToolbox = gulp.src([DEST_DEV + '/assets/bower_components/sw-toolbox/*.js'])
	.pipe(gulp.dest(DEST_POLYMER + '/sw-toolbox'));

	return merge(app, swBootstrap, swToolbox)
	.pipe($.size({title: 'copyBuild'}));
});
/**
 * Replaces paths DEST_POLYMER so they load the minified resources
 */
gulp.task('polymer-use-minified-paths', function () {
	return gulp.src([
		DEST_DEV + '/**/*.html'
	])
	// Replace path for vulcanized assets
	.pipe($.replace('elements/elements.html', 'elements/elements.build.html'))
	// Replace path for minimized webcomponentsjs
	.pipe($.replace('bower_components/webcomponentsjs/webcomponents-lite.js', 'bower_components/webcomponentsjs/webcomponents-lite.min.js'))
	// Minify HTML
	.pipe($.if('*.html', $.minifyHtml()))
	// Output Files
	.pipe(gulp.dest(DEST_POLYMER))
	.pipe($.size({title: 'polymer-minify'}));
});
/**
 * Polybuild
 */
gulp.task('polymer-polybuild', function () {
	return gulp.src(DEST_POLYMER + '/assets/elements/elements.html')
	.pipe(polybuild({maximumCrush: true}))
	.pipe(gulp.dest(DEST_POLYMER + '/assets/elements/'))
	.pipe($.size({title: 'polymer-polybuild'}));
});
/**
 * Deletes unused resources
 */
gulp.task('polymer-clean',
	del.bind(null, [
		DEST_POLYMER + '/assets/test',

		DEST_POLYMER + '/assets/bower_components/**/*',

		'!' + DEST_POLYMER + '/assets/bower_components/ace-element',
			  DEST_POLYMER + '/assets/bower_components/ace-element/**/*',
		'!' + DEST_POLYMER + '/assets/bower_components/ace-element/src-min-noconflict',
			  DEST_POLYMER + '/assets/bower_components/ace-element/src-min-noconflict/**/*',
		'!' + DEST_POLYMER + '/assets/bower_components/ace-element/src-min-noconflict/mode-c_cpp.js',
		'!' + DEST_POLYMER + '/assets/bower_components/ace-element/src-min-noconflict/theme-monokai.js',

		'!' + DEST_POLYMER + '/assets/bower_components/webcomponentsjs',
			  DEST_POLYMER + '/assets/bower_components/webcomponentsjs/**/*',
		'!' + DEST_POLYMER + '/assets/bower_components/webcomponentsjs/webcomponents-lite.min.js',

			  DEST_POLYMER + '/assets/elements/**/*',
		'!' + DEST_POLYMER + '/assets/elements/elements.build.html',
		'!' + DEST_POLYMER + '/assets/elements/elements.build.js'
	]
));
/**
 * Add a revison query paramenter to the resources. Based on manifest version.
 */
gulp.task('polymer-revision', function () {
	var fs = require('fs');
	var manifest = JSON.parse(fs.readFileSync(DEST_POLYMER + '/manifest.json'));
	return gulp.src([DEST_POLYMER + '/**/*.html'])
		.pipe($.replace('elements.build.html', 'elements.build.html?'+manifest.version))
		.pipe($.replace('elements.build.js', 'elements.build.js?'+manifest.version))
		.pipe($.replace('data/nodes.json', 'data/nodes.json?'+manifest.version))
		.pipe($.replace('data/strings/{{locale}}.json', 'data/strings/{{locale}}.json?'+manifest.version))
		.pipe(gulp.dest(DEST_POLYMER))
		.pipe($.size({title: 'revision'}));
});
/**
 * Clones the content from DEST_POLYMER to DEST_GZIP
 */
gulp.task('gzip-clone', function () {
	return gulp.src([ DEST_POLYMER + '/**/*'])
	.pipe(gulp.dest(DEST_GZIP))
	.pipe($.size({title: 'gzip-clone'}));
});
/**
 * Clones the content from DEST_POLYMER to DEST_GZIP and gzipps it
 */
gulp.task('gzip-compression', ['gzip-clone'], function () {
	return gulp.src([
		DEST_GZIP + '/**/*.html',
		DEST_GZIP + '/**/*.js',
		DEST_GZIP + '/**/*.css',
		DEST_GZIP + '/**/*.json',
		DEST_GZIP + '/**/*.svg',
		DEST_GZIP + '/**/*.woff2'
	])
	.pipe($.gzip({ append: false }))
	.pipe(gulp.dest(DEST_GZIP))
	.pipe($.size({title: 'gzip-compression'}));
});

/**
 * Builds the Gzip setup and publish to s3
 */
gulp.task('s3', ['build:gzip'], function () {
	var aws = JSON.parse(fs.readFileSync('./aws-config/'+argv.environment+'.json'));

	var longCacheControl = 'max-age=604800, public, no-transform';
	var quickCacheControl = 'max-age=120, public, no-transform';

	return merge (
		gulp.src([ DEST_GZIP + '/**/index.html' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': quickCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'text/html'
			}
		})),

		gulp.src([ DEST_GZIP + '/**/*.html', '!' + DEST_GZIP + '/**/index.html' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'text/html'
			}
		})),

		gulp.src([ DEST_GZIP + '/**/*.js' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'application/javascript'
			}
		})),

		gulp.src([ DEST_GZIP + '/**/*.css' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'text/css'
			}
		})),

		gulp.src([ DEST_GZIP + '/**/*.json' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'application/json'
			}
		})),

		gulp.src([ DEST_GZIP + '/**/*.svg' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'image/svg+xml'
			}
		})),

		gulp.src([ DEST_GZIP + '/**/*.woff2' ])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl,
				'content-encoding': 'gzip',
				'content-type': 'application/font-woff2'
			}
		})),

		gulp.src([
			DEST_GZIP + '/**/*.*',
			'!' + DEST_GZIP + '/**/*.DS_Store',
			'!' + DEST_GZIP + '/**/*.woff2',
			'!' + DEST_GZIP + '/**/*.html',
			'!' + DEST_GZIP + '/**/*.js',
			'!' + DEST_GZIP + '/**/*.css',
			'!' + DEST_GZIP + '/**/*.json',
			'!' + DEST_GZIP + '/**/*.svg'
		])
		.pipe($.s3(aws, {
			headers: {
				'Cache-Control': longCacheControl
			}
		}))
	)
	.pipe($.size({title: 's3'}));

});
/**
 * Deploys the code. Asks for confirmation if deploying to production
 */
gulp.task('confirm-deploy', [], function () {
	if(argv.environment == 'production'){
		return gulp.src('')
		.pipe($.prompt.confirm('You are about to deploy TO THE LIVE SITE! Are you sure you want to continue)'))
		.pipe($.prompt.confirm('Really sure?!'))
	}

});
gulp.task('deploy', function (cb) {
	runSequence(
		'confirm-deploy',
		's3',
	cb);
});

/* Cleaners ----------------------------------------------------------------- */
/**
 * Delete all generated files
 */
gulp.task('clean:dev', del.bind(null, [DEST_DEV]));
gulp.task('clean:polymer', del.bind(null, [DEST_POLYMER]));
gulp.task('clean:gzip', del.bind(null, [DEST_GZIP]));
/* Builders ----------------------------------------------------------------- */
gulp.task('build:dev', ['clean:dev'], function (cb) {
	runSequence(
		'soft-jshint',
		'manifest-version',
		'language-files',
		'jekyll',
	cb);
});
gulp.task('build:polymer', ['clean:polymer'], function (cb) {
	runSequence(
		'jshint',
		'manifest-version',
		'language-files',
		'jekyll',
		'polymer-copy',
		'polymer-use-minified-paths',
		'polymer-polybuild',
		'polymer-clean',
		'polymer-revision',
	cb);
});
gulp.task('build:gzip', ['clean:gzip'], function (cb) {
	runSequence(
		'build:polymer',
		'gzip-compression',
	cb);
});

/* Servers ------------------------------------------------------------------ */
gulp.task('serve:dev', ['build:dev'], $.serve({
	root: [DEST_DEV],
	port: 4000
}));
gulp.task('serve:polymer', ['build:polymer'],  $.serve({
	root: [DEST_POLYMER],
	port: 4001
}));
gulp.task('serve:gzip', ['build:gzip'],  $.serve({
	root: [DEST_GZIP],
	port: 4002,
	middleware: function(req, res, next) {
		if(req.url[req.url.length - 1] == '/' || (/\.(html|js|css|json|svg|woff2)/).test(req.url)){
			res.setHeader('content-encoding', 'gzip');

			if((/\.(html)$/i).test(req.url)){
				res.setHeader('content-type', 'text/html');
			}
			else if((/\.(js)$/i).test(req.url)){
				res.setHeader('content-type', 'application/javascript');
			}
			else if((/\.(css)$/i).test(req.url)){
				res.setHeader('content-type', 'text/css');
			}
			else if((/\.(json)$/i).test(req.url)){
				res.setHeader('content-type', 'application/json');
			}
			else if((/\.(svg)$/i).test(req.url)){
				res.setHeader('content-type', 'image/svg+xml');
			}
			else if((/\.(woff2)$/i).test(req.url)){
				res.setHeader('content-type', 'application/font-woff2');
			}
		}
		next()
	}
}));
/* Watchers ----------------------------------------------------------------- */
gulp.task('watch:dev', ['serve:dev'], function() {
	gulp.watch(SRC + '/**/*', ['build:dev']);
});
gulp.task('watch:polymer', ['serve:polymer'], function() {
	gulp.watch(SRC + '/**/*', ['build:polymer']);
});
gulp.task('watch:gzip', ['serve:gzip'], function() {
	gulp.watch(SRC + '/**/*', ['build:gzip']);
});
