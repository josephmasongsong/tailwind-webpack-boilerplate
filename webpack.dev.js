const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      files: [
        '**/*.html',
        '**/*.scss'
      ],
      host: 'localhost',
      port: 3000,
      injectChanges: true,
      server: { baseDir: ['./'] }
    })
  ]
});