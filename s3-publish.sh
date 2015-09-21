while true; do
    read -p "This will deply to production! ARE YOU REALLY SURE YOU WANT TO DO THIS?" yn
    case $yn in
        [Yy]* ) make install; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
exit

gulp static
	
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
