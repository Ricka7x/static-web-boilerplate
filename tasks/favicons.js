const gulp = require('gulp')
const realFavicon = require('gulp-real-favicon')
const htmlmin = require('gulp-htmlmin')
const fs = require('fs')
const routes = require('../routes')

const FAVICON_DATA_FILE = './docs/faviconData.json'

gulp.task('generate-favicon', done => {
  realFavicon.generateFavicon(
    {
      masterPicture: `${routes.dev}/${routes.assets}/images/leaf.png`,
      dest: `${routes.prod}/${routes.assets}/images/favicons`,
      iconsPath: `${routes.assets}/images/favicons`,
      design: {
        ios: {
          pictureAspect: 'backgroundAndMargin',
          backgroundColor: '#ffffff',
          margin: '35%',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#ffffff',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: true,
            windows10Ie11EdgeTiles: {
              small: true,
              medium: true,
              big: true,
              rectangle: true
            }
          }
        },
        androidChrome: {
          pictureAspect: 'shadow',
          themeColor: '#ffffff',
          manifest: {
            name: 'my-app-name',
            startUrl: 'http://my-app-url',
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: 'silhouette',
          themeColor: '#5bbad5'
        }
      },
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
    .src([`${routes.prod}/*.html`])
    .pipe(
      realFavicon.injectFaviconMarkups(
        JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code
      )
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(routes.prod))
)

gulp.task('check-for-favicon-update', () => {
  const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version
  realFavicon.checkForUpdates(currentVersion, err => {
    if (err) {
      throw err
    }
  })
})
