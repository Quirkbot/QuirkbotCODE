#!/bin/bash
SRC_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $SRC_DIR


# Make sure all dependecies are installed
#npm install
cd src/assets/
bower install
cd ../../

# Prepare shrinkwrap
npm shrinkwrap

# Clear dist
rm -r dist
mkdir dist

# Created development environment
npm run gulp -- build:gzip --environment=development
mkdir dist/development
mv dist_dev dist/development/dist_dev
mv dist_polymer dist/development/dist_polymer
mv dist_gzip dist/development/dist_gzip

# Created stage environment
npm run gulp -- build:gzip --environment=stage
mkdir dist/stage
mv dist_dev dist/stage/dist_dev
mv dist_polymer dist/stage/dist_polymer
mv dist_gzip dist/stage/dist_gzip

# Created production environment
npm run gulp -- build:gzip --environment=production
mkdir dist/production
mv dist_dev dist/production/dist_dev
mv dist_polymer dist/production/dist_polymer
mv dist_gzip dist/production/dist_gzip

# Created lite environment
npm run gulp -- build:gzip --environment=lite
mkdir dist/lite
mv dist_dev dist/lite/dist_dev
mv dist_polymer dist/lite/dist_polymer
mv dist_gzip dist/lite/dist_gzip