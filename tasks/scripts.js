const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const routes = require('../routes')

gulp.task('scripts', () =>
  gulp
    .src(`${routes.src}/${routes.assets}/scripts/main.js`)
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
    .pipe(gulp.dest(`${routes.dev}/${routes.assets}/scripts`))
)
