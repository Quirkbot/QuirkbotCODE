gulp
rm -r s3_publish
cp -r dist s3_publish

rm -r s3_publish/bower_components
mkdir -p s3_publish/bower_components/webcomponentsjs
cp dist/bower_components/webcomponentsjs/webcomponents-lite.min.js \
s3_publish/bower_components/webcomponentsjs/webcomponents-lite.min.js

rm -r s3_publish/elements
mkdir -p s3_publish/elements
cp  dist/elements/elements.vulcanized.html \
s3_publish/elements/elements.vulcanized.html

aws s3 sync s3_publish s3://code.quirkbot.com/program --exclude *.DS_Store
#rm -r s3_publish
