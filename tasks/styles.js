const gulp = require('gulp')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const easyimport = require('postcss-easy-import')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const { src, dev, assets } = require('../config')

gulp.task('styles', () =>
  gulp
    .src(`${src}/${assets}/styles/main.css`)
    .pipe(plumber())
    .pipe(
      postcss([
        easyimport({ prefix: '_', extensions: ['.css', '.scss'] }),
        precss({}),
        autoprefixer({ browsers: ['last 2 versions'] })
      ])
    )
    .on('error', err => console.log(err)) // eslint-disable-line  no-console
    .pipe(gulp.dest(`${dev}/${assets}/styles`))
)
