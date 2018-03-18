const gulp = require('gulp')
const surge = require('gulp-surge')
const { domain } = require('../config')

gulp.task('deploy', ['build'], () =>
  surge({
    project: './docs', // Path to your static build directory
    domain: `${domain}.surge.sh` // Your domain or Surge subdomain
  })
)
