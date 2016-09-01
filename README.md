# Quirkbot CODE frontend

## Dependecies
- Nodejs
- Npm
- Bower
- Jekyll

## Setup
```
git clone https://github.com/Quirkbot/QuirkbotCODE.git
cd QuirkbotCODE
npm install
cd src/assets/
bower install
```
## Distribution Setups
There are different distribution "setups". All setups have the same content, but each one have a difference in how the content get piped before being deployed to the final distribution directory.
- `dev`
- `polymer`
- `gzip`

#### `dev` distribution
It's the content of `/src` compiled with Jekyll.

The final content get's deployed to `/dist_dev`.

#### `polymer` distribution
Same as `dev`, but the content also needs to pass through a JSLint test first, and afterwards, the main Polymer resources (`/src/assets/elements/elements.html`) gets "polybuilt" to `/src/assets/elements/elements.build.html` and `/src/assets/elements/elements.build.js`. Service worker elements also get placed in the correct paths, and paths are updated to use minified resources.

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

#### `npm run gulp -- build:{distribution}` task
Builds the content of the `/src` to one of the distribution directories.
- `npm run gulp -- build:dev` (builds to `/dist`)
- `npm run gulp -- build:polymer` (builds to `/dist_polymer`)
- `npm run gulp -- build:gzip` (builds to `/dist_gzip`)

#### `npm run gulp -- serve:{distribution}` task
Serves the content of the distribution directory.
- `npm run gulp -- serve:dev` (serves at http://localhost:4000)
- `npm run gulp -- serve:polymer` (serves at http://localhost:4001)
- `npm run gulp -- serve:gzip` (serves at http://localhost:4002)

#### `npm run gulp -- watch:{distribution}` task
Serves the content of the distribution directory and rebuilds every time there is a file change.

#### `npm run gulp -- clean:{distribution}` task
Cleans the content of the distribution directory.

## Environment flags
All the command line task accepts a `--environment` flag. This flag will be used internally by Jerkyll to enable/disable features and also to control environment specific settings (@see `/src/_config.yml`).

There are 4 possible values for the flags
- `--environment=development` (default)
- `--environment=production`
- `--environment=lite`
- `--environment=stage`

Sample usage
```
npm run gulp -- build:dev --environment=production
npm run gulp -- serve:polymer --environment=stage

# no flag...
npm run gulp -- watch:gzip
# ...same as:
npm run gulp -- watch:gzip --environment=development
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
npm run gulp -- deploy --environment=stage
```
or
```
npm run gulp -- deploy --environment=production
```

## Publishing to NPM registry
**Do not call `npm publish` directly!** Use instead:
```
npm run custom_publish
```
It will call `npm shrinkwrap` and build the distributions in all the environments before publishing it to NPM.

## Updating dependencies

### Bower
The bower dependencies are intentionally locked to avoid surprises, but it's recommended that you keep them updated - you will just have to do it manually, one by one.

In order to make your life easier, use `npm-check-updates`.

```
npm install -g npm-check-updates
cd src/assets
ncu -m bower
```