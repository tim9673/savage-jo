const path = require('path')

//Common configurations
let config = {
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}

//Copy and paste this for as many different bundles
//as required
let indexConfig = Object.assign({}, config, {
  entry: path.join(__dirname, 'typescript', 'index.tsx'),
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'index.bundle.js'
  }
})

//Add each config here.
module.exports = [indexConfig]
