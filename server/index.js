require('babel-register')({
  presets: [
    'env',
    'react',
    'stage-0'
  ]
})

module.exports = require('./server.js')
