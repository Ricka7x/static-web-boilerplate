module.exports = {
  src: './src', // if you were to change the name of the src folder you would have to change the path as well
  dev: './temp', // if you were to change the name of the develpment folder (currently temp) you would have to change the path as well
  prod: './docs', // if you were to change the name of the production folder (currently docs) you would have to change the path as well
  assets: 'assets', // if you were to change the name of the assets folder (currently assets) you would have to change the path as well
  domain: 'ricky89', // choose your own domain no spaces allowed (this would become ricky89.surge.sh) visit https://surge.sh/ for more info
  faviconDesign: {
    // for more information visit https://github.com/RealFaviconGenerator/gulp-real-favicon
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
  }
}
