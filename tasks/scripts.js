const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const { src, dev, assets } = require('../config')

gulp.task('scripts', () =>
  gulp
    .src(`${src}/${assets}/scripts/main.js`)
    .pipe(plumber())
    .pipe(
      webpack({
        output: {
          filename: 'main.js'
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
            }
          ]
        }
      })
    )
    .pipe(gulp.dest(`${dev}/${assets}/scripts`))
)
