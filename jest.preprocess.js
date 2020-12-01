const { createTransformer } = require('babel-jest')

module.exports = createTransformer({
  plugins: ['babel-plugin-styled-components'],
  presets: ['babel-preset-gatsby', '@babel/preset-typescript']
})
