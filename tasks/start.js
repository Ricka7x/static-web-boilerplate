const gulp = require('gulp')
const watch = require('gulp-watch')
const bs = require('browser-sync').create()
const { src, dev, assets } = require('../config')

gulp.task(
  'start',
  ['fonts', 'templates', 'styles', 'scripts', 'images'],
  () => {
    bs.init({
      notify: false,
      server: {
        baseDir: dev
      }
    })

    watch(`${src}/${assets}/styles/**/*.css`, () => gulp.start('refreshCSS'))

    watch(`${src}/${assets}/scripts/**/*.js`, () => gulp.start('refreshJS'))

    watch(`${src}/templates/**/*.ejs`, () => gulp.start('templates'))
    watch(`${dev}/*.html`, () => bs.reload())

    watch(`${src}/${assets}/images/*`, () => gulp.start('images'))

    watch(`${src}/${assets}/fonts/*`, () => gulp.start('fonts'))
  }
)

gulp.task('refreshCSS', ['styles'], () =>
  gulp.src(`${src}/${assets}/styles/main.css`).pipe(bs.stream())
)

gulp.task('refreshJS', ['scripts'], () => {
  bs.reload()
})
