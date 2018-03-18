const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const { src, dev, assets, prod } = require('../config')

gulp.task('images', () =>
  gulp
    .src(`${src}/${assets}/images/*`)
    .pipe(gulp.dest(`${dev}/${assets}/images`))
)

gulp.task('optimize-images', () =>
  gulp
    .src(`${dev}/${assets}/images/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${prod}/${assets}/images`))
)
