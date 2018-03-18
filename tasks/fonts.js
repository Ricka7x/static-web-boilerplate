const gulp = require('gulp')
const font2css = require('gulp-font2css').default
const concat = require('gulp-concat')
const { src, assets } = require('../config')

gulp.task('fonts', () =>
  gulp
    .src(`${src}/${assets}/fonts/**/*.{otf,ttf,woff,woff2}`)
    .pipe(font2css())
    .pipe(concat('_fonts.css'))
    .pipe(gulp.dest(`${src}/${assets}/styles/`))
)
