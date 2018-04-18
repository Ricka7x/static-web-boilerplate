const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sass = require('gulp-ruby-sass')
const { src, dev, assets } = require('../config')

gulp.task('styles', () =>
  sass(`${src}/${assets}/styles/main.scss`, { style: 'expanded' })
    .pipe(plumber())
    .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] })]))
    .on('error', err => console.log(err)) // eslint-disable-line  no-console
    .pipe(gulp.dest(`${dev}/${assets}/styles`))
)
