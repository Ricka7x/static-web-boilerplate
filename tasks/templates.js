const gulp = require('gulp')
const ejs = require('gulp-ejs')
const plumber = require('gulp-plumber')
const usemin = require('gulp-usemin')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('gulp-cssnano')
const htmlmin = require('gulp-htmlmin')
const rev = require('gulp-rev')
const uglify = require('gulp-uglify')
const routes = require('../routes')

gulp.task('templates', () =>
  gulp
    .src(`${routes.src}/templates/*.ejs`)
    .pipe(plumber())
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest(routes.dev))
)

gulp.task('html-css-js', () =>
  gulp
    .src(`${routes.dev}/**/*.html`)
    .pipe(
      usemin({
        html: [() => htmlmin({ collapseWhitespace: true })],
        js: [
          () => sourcemaps.init({ loadMaps: true }),
          () => rev(),
          () => uglify(),
          () => sourcemaps.write('./')
        ],
        css: [
          () => sourcemaps.init({ loadMaps: true }),
          () => rev(),
          () => cssnano(),
          () => sourcemaps.write('./')
        ]
      })
    )
    .on('error', err => console.log(err)) // eslint-disable-line no-console
    .pipe(gulp.dest(routes.prod))
)
