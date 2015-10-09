# Quirkbot CODE frontend

## Command line interface
### Serving locally
#### ```$ gulp serve```
Serves files for local development. Static resources will only be available as html files, eg:

- ``http://ide-local.quirkbot.com:3000/``
- ``http://ide-local.quirkbot.com:3000/_static_user.html``
- ``http://ide-local.quirkbot.com:3000/_static_program.html``

### Test build for release
#### ```$ gulp```
"Polybuild" the resources.

### Building release
#### ```$ gulp static```
Builds a release distribution. Files will be available at the directories:
- `./static`
- `./static_stage`

The static resources will be converted to directories, eg:

- `/_static_user.html` -> `/user`
- `/_static_program.html` -> `/program`

### Deploy to stage
#### ```$ sh s3-publish-stage```
Builds a release distribution and publish to the stage server: http://code-stage.quirkbot.com

### Deploy to production
#### ```$ sh s3-publish```
Builds a release distribution and publish to the production server: http://code.quirkbot.com
