const gulp = require('gulp')
const watch = require('gulp-watch')
const bs = require('browser-sync').create()
const routes = require('../routes')

gulp.task('start', ['templates', 'styles', 'scripts', 'images'], () => {
  bs.init({
    notify: false,
    server: {
      baseDir: routes.dev
    }
  })

  watch(`${routes.src}/${routes.assets}/styles/**/*.css`, () =>
    gulp.start('refreshCSS')
  )

  watch(`${routes.src}/${routes.assets}/scripts/**/*.js`, () =>
    gulp.start('refreshJS')
  )

  watch(`${routes.src}/templates/**/*.ejs`, () => gulp.start('templates'))
  watch(`${routes.dev}/*.html`, () => bs.reload())

  watch(`${routes.src}/${routes.assets}/images/*`, () => gulp.start('images'))
})

gulp.task('refreshCSS', ['styles'], () =>
  gulp.src(`${routes.src}/${routes.assets}/styles/main.css`).pipe(bs.stream())
)

gulp.task('refreshJS', ['scripts'], () => {
  bs.reload()
})
