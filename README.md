# Quirkbot CODE frontend

## Configuring external endpoints

To configure the external endpoints (api, compiler, etc) see `/src/_config.yml`.

## Setups
There are different distribution "setups". All setups have the same content, but each one have a difference in how the content get piped before being deployed to the final distribution directory.
- `dev`
- `polymer`
- `gzip`

#### `dev` distribution
It's the content of `/src` compiled with Jekyll.

The final content get's deployed to `/dist`.

#### `polymer` distribution
Same as `dev`, but the content also needs to pass through a JSLint test first, and afterwards, the main Polymer resources (`/_static/elements/elements.html`) gets "polybuilt" to `/_static/elements/elements.build.html` and `/_static/elements/elements.build.js`. Service worker elements also get placed in the correct paths, and paths are updated to use minified resources.

The final content get's deployed to `/dist_polymer`.

#### `gzip` distribution
Same as `polymer`, but the content is gzipped afterwards.

The final content get's deployed to `/dist_gzip`.

## Command line interface
Every distribution setup respond to the same set of command line tasks:
- `build`
- `serve`
- `watch`
- `clean`

#### `gulp build:{distribution}` task
Builds the content of the `/src` to one of the distribution directories.
- `gulp build:dev` (builds to `/dist`)
- `gulp build:polymer` (builds to `/dist_polymer`)
- `gulp build:gzip` (builds to `/dist_gzip`)

#### `gulp serve:{distribution}` task
Serves the content of the distribution directory.
- `gulp serve:dev` (serves at http://localhost:4000)
- `gulp serve:polymer` (serves at http://localhost:4001)
- `gulp serve:gzip` (serves at http://localhost:4002)

#### `gulp watch:{distribution}` task
Serves the content of the distribution directory and rebuilds every time there is a file change.

#### `gulp clean:{distribution}` task
Cleans the content of the distribution directory.

## Environment flags
All the command line task accepts a `--environment` flag. This flag will be used internally by Jerkyll to enable/disable features and also to control environment specific settings (@see `/src/_config.yml`).

There are 3 possible values for the flags
- `--environment=development` (default)
- `--environment=production`
- `--environment=stage`

Sample usage
```
gulp build:dev --environment=production
gulp serve:polymer --environment=stage

# no flag...
gulp watch:gzip
# ...same as:
gulp watch:gzip --environment=development
```
## Deploying
To deploy the `gzip` setup to Amazon S3, please create the corresponding configuration
files in `/aws-config/[environment].json`.
For security, those files should not be included on the repository.

Examples:

### `/aws-config/stage.json`

```
{
  "key": "YOUR_S3_KEY",
  "secret": "YOUR_S3_SECRET",
  "bucket": "code-stage.quirkbot.com",
  "region": "us-east-1"
}

```
### `/aws-config/production.json`

```
{
  "key": "YOUR_S3_KEY",
  "secret": "YOUR_S3_SECRET",
  "bucket": "code.quirkbot.com",
  "region": "us-east-1"
}

```

When you are ready to deploy, run:
```
gulp s3 --environment=stage
```
or
```
gulp s3 --environment=production
```
