const gulp = require('gulp')
const font2css = require('gulp-font2css').default
const concat = require('gulp-concat')
const routes = require('../routes')

gulp.task('fonts', () =>
  gulp
    .src(`${routes.src}/${routes.assets}/fonts/**/*.{otf,ttf,woff,woff2}`)
    .pipe(font2css())
    .pipe(concat('_fonts.css'))
    .pipe(gulp.dest(`${routes.src}/${routes.assets}/styles/`))
)
