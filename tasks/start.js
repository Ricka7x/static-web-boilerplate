const gulp = require('gulp')
const ejs = require('gulp-ejs')
const plumber = require('gulp-plumber')
const routes = require('../routes')

gulp.task('start', () =>
  gulp
    .src(`${routes.src}/templates/*.ejs`)
    .pipe(plumber())
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest(routes.dev))
)
