gulp gzip-static

aws s3 sync static_stage s3://code-stage.quirkbot.com \
--content-encoding="gzip" \
--content-type="application/javascript" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.js' \
--profile quirkbot \
&&\
aws s3 sync static_stage s3://code-stage.quirkbot.com \
--content-encoding="gzip" \
--content-type="text/css" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.css' \
--profile quirkbot \
&&\
aws s3 sync static_stage s3://code-stage.quirkbot.com \
--content-encoding="gzip" \
--content-type="text/html" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.html' \
--profile quirkbot \
&&\
aws s3 sync static_stage s3://code-stage.quirkbot.com \
--content-encoding="gzip" \
--content-type="application/font-woff2" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.woff2' \
--profile quirkbot \
&&\
aws s3 sync static_stage s3://code-stage.quirkbot.com \
--content-encoding="gzip" \
--content-type="application/json" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.json' \
--profile quirkbot \
&&\
aws s3 sync static_stage s3://code-stage.quirkbot.com \
--content-encoding="gzip" \
--content-type="image/svg+xml" \
--cache-control "max-age 86400" \
--exclude '*' --include '*.svg' \
--profile quirkbot \
&&\
aws s3 sync static_stage s3://code-stage.quirkbot.com \
--cache-control "max-age 86400" \
--exclude '*.js' --exclude '*.css' --exclude '*.html' --exclude '*.woff2' --exclude '*.svg' --exclude '*.json' --exclude '*.DS_Store' \
--profile quirkbot
