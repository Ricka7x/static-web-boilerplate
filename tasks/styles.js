const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const easyimport = require('postcss-easy-import')
const precss = require('precss')
const routes = require('../routes')

gulp.task('styles', () =>
  gulp
    .src(`${routes.src}/${routes.assets}/styles/main.css`)
    .pipe(plumber())
    .pipe(
      postcss([
        easyimport({ prefix: '_', extensions: ['.css', '.scss'] }),
        precss({})
      ])
    )
    .on('error', err => console.log(err)) // eslint-disable-line  no-console
    .pipe(gulp.dest(`${routes.dev}/${routes.assets}/styles`))
)
