const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const routes = require('../routes')

gulp.task('images', () =>
  gulp
    .src(`${routes.src}/${routes.assets}/images/*`)
    .pipe(gulp.dest(`${routes.dev}/${routes.assets}/images`))
)

gulp.task('optimize-images', () =>
  gulp
    .src(`${routes.dev}/${routes.assets}/images/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${routes.prod}/${routes.assets}/images`))
)
