const gulp = require('gulp')

gulp.task('build', [
  'optimize-html-css-js',
  'optimize-images',
  'generate-favicon',
  'inject-favicon-markups'
])
