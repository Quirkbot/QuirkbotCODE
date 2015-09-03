gulp static

aws s3 sync static/_static s3://code.quirkbot.com/_static --delete --exclude *.DS_Store
aws s3 sync static/program s3://code.quirkbot.com/program --delete --exclude *.DS_Store
