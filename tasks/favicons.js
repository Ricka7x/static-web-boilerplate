const gulp = require('gulp')
const realFavicon = require('gulp-real-favicon')
const htmlmin = require('gulp-htmlmin')
const fs = require('fs')
const { dev, assets, prod, faviconDesign } = require('../config')

const FAVICON_DATA_FILE = './docs/faviconData.json'

gulp.task('generate-favicon', done => {
  realFavicon.generateFavicon(
    {
      masterPicture: `${dev}/${assets}/images/favicon.png`,
      dest: `${prod}/${assets}/images/favicons`,
      iconsPath: `${assets}/images/favicons`,
      design: faviconDesign,
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      },
      markupFile: FAVICON_DATA_FILE
    },
    () => {
      done()
    }
  )
})

gulp.task('inject-favicon-markups', ['generate-favicon'], () =>
  gulp
    .src([`${prod}/*.html`])
    .pipe(
      realFavicon.injectFaviconMarkups(
        JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code
      )
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(prod))
)

gulp.task('check-for-favicon-update', () => {
  const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version
  realFavicon.checkForUpdates(currentVersion, err => {
    if (err) {
      throw err
    }
  })
})
