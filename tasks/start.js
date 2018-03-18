const gulp = require('gulp')
const bs = require('browser-sync').create()
const routes = require('../routes')

gulp.task('start', ['templates', 'styles', 'scripts'], () =>
  bs.init({
    notify: false,
    server: {
      baseDir: routes.dev
    }
  })
)
