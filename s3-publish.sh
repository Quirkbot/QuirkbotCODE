gulp static

aws s3 sync static/_static s3://code.quirkbot.com/_static --delete --exclude *.DS_Store

aws s3 sync static/confirm s3://code.quirkbot.com/confirm --delete --exclude *.DS_Store
aws s3 sync static/program s3://code.quirkbot.com/program --delete --exclude *.DS_Store
aws s3 sync static/register s3://code.quirkbot.com/register --delete --exclude *.DS_Store
aws s3 sync static/user s3://code.quirkbot.com/user --delete --exclude *.DS_Store

aws s3 cp static/index.html s3://code.quirkbot.com/index.html
aws s3 cp static/404.html s3://code.quirkbot.com/404.html
