module.exports = {
  src: './src',
  dev: './temp',
  prod: './docs',
  assets: 'assets',
  domain: 'ricky89',
  faviconDesign: {
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
