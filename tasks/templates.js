const gulp = require('gulp')
const ejs = require('gulp-ejs')
const plumber = require('gulp-plumber')
const usemin = require('gulp-usemin')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('gulp-cssnano')
const rev = require('gulp-rev')
const uglify = require('gulp-uglify')
const { src, dev, prod } = require('../config')

gulp.task('templates', () =>
  gulp
    .src(`${src}/templates/*.ejs`)
    .pipe(plumber())
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(gulp.dest(dev))
)

gulp.task('optimize-html-css-js', () =>
  gulp
    .src(`${dev}/**/*.html`)
    .pipe(
      usemin({
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
    .pipe(gulp.dest(prod))
)
