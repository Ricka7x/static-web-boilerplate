const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-sass')
const { src, dev, assets } = require('../config')

gulp.task('styles', () =>
  gulp
    .src(`${src}/${assets}/styles/main.scss`)
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: 'expanded',
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
    .pipe(gulp.dest(`${dev}/${assets}/styles`))
)
