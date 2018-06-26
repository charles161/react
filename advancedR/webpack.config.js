const path = require('path');

module.exports = {
  resolve:{
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  entry:['babel-polyfill','./lib/renderers/index.js'],//we use babel polyfill to use async await in client side
  output: {
    path: path.resolve(__dirname, 'public'), filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude:/node_modules/
    }]
  }
};