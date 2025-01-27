#!/bin/sh
set -e

# http-equiv="refresh" to skip redirect pages
# use --null for safe file name processing, we have files with spaces
find public -type f -name '*.html' -exec grep --null -L 'http-equiv="refresh"' {} \; | xargs -r --null yarn pa11y-ci
