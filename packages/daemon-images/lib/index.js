const fs = require('fs')
const move = require('./move')

module.exports = {
  // Used primarily for testing. Or if you want to inject a function to do your reading for you.
  unmanaged: {
    move,
  },
  managed: {
    move: move(fs),
  }
}