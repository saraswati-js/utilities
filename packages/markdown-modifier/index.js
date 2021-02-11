const fs = require('fs')
const move = require('./lib/move')
const modify = require('./lib/modify')

module.exports = {
  // Used primarily for testing. Or if you want to inject a function to do your reading for you.
  unmanaged: {
    modify,
    move,
  },
  managed: {
    modify: modify(fs),
    move: move(fs),
  }
}