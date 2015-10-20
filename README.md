# Quirkbot CODE frontend

# Configuring API and Compiler

To configure the endpoints for stage and production, modify ``app/config.json``.

To configure the endpoints for local development modify the attributes of the app's custom element in the HTML files directly. Example from ```app/_static_program.html```:

```
<qb-app-program
	(...)
	compiler-url="http://localhost:8080"
	api-url="http://localhost:3007"
	(...)>
</qb-app-program>
```
# Command line interface
## Serving locally
#### ```$ gulp serve```
Serves files for local development. Static resources will only be available as html files, eg:

- ``http://ide-local.quirkbot.com:3000/``
- ``http://ide-local.quirkbot.com:3000/_static_user.html``
- ``http://ide-local.quirkbot.com:3000/_static_program.html``

## Test build for release
#### ```$ gulp```
"Polybuild" the resources.

## Building release
#### ```$ gulp static```
Builds a release distribution. Files will be available at the directories:
- `./static`
- `./static_stage`

The static resources will be converted to directories, eg:

- `/_static_user.html` -> `/user`
- `/_static_program.html` -> `/program`

## Deploy to stage
#### ```$ sh s3-publish-stage```
Builds a release distribution and publish to the stage server: http://code-stage.quirkbot.com

## Deploy to production
#### ```$ sh s3-publish```
Builds a release distribution and publish to the production server: http://code.quirkbot.com
