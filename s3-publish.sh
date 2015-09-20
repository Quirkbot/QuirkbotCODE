gulp static

#aws s3 sync static/_static s3://code.quirkbot.com/_static --delete --exclude *.DS_Store

#aws s3 sync static/confirm s3://code.quirkbot.com/confirm --delete --exclude *.DS_Store
#aws s3 sync static/program s3://code.quirkbot.com/program --delete --exclude *.DS_Store
#aws s3 sync static/register s3://code.quirkbot.com/register --delete --exclude *.DS_Store
#aws s3 sync static/user s3://code.quirkbot.com/user --delete --exclude *.DS_Store

#aws s3 cp static/index.html s3://code.quirkbot.com/index.html
#aws s3 cp static/404.html s3://code.quirkbot.com/404.html


aws s3 sync static s3://code.quirkbot.com \
--content-encoding="gzip" \
--content-type="application/javascript" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.js' &&\
aws s3 sync static s3://code.quirkbot.com \
--content-encoding="gzip" \
--content-type="text/css" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.css' &&\
aws s3 sync static s3://code.quirkbot.com \
--content-encoding="gzip" \
--content-type="text/html" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.html' &&\
aws s3 sync static s3://code.quirkbot.com \
--content-encoding="gzip" \
--content-type="application/font-woff2" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.woff2' &&\
aws s3 sync static s3://code.quirkbot.com \
--content-encoding="gzip" \
--content-type="application/json" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.json' &&\
aws s3 sync static s3://code.quirkbot.com \
--content-encoding="gzip" \
--content-type="image/svg+xml" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.svg' &&\
aws s3 sync static s3://code.quirkbot.com \
--cache-control "max-age 86400" \
--exclude '*.js' --exclude '*.css' --exclude '*.html' --exclude '*.woff2' --exclude '*.svg' --exclude '*.json' --exclude '*.DS_Store'
