var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: { path: './cloud/', filename: 'main.js' },
  module: { loaders: [
    { test: /\.jsx?$/, 
      loader: 'babel-loader?optional=runtime&stage=0',
      include: path.join(__dirname, 'src')
    }
  ] }
};
