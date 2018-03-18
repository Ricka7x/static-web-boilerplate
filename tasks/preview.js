const gulp = require('gulp')
const bs = require('browser-sync')
const { prod } = require('../config')

gulp.task('preview', () => {
  bs.init({
    notify: false,
    server: {
      baseDir: prod
    }
  })
})
