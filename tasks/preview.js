const gulp = require('gulp')
const bs = require('browser-sync')
const routes = require('../routes')

gulp.task('preview', () => {
  bs.init({
    notify: false,
    server: {
      baseDir: routes.prod
    }
  })
})
