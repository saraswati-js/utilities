// const move = require('./move')
// const modify = require('./modify')

const move = (destination, dir) => (replace, meta, imagePath) => {

}

const modify = (dir) => (replace, meta, imagePath) => {

}

const lib = (filereader) => (file, dir, destination) => {
  // GREP STUFF

  return content.replace(pattern, regexReplace(destination, dir))
}

// (destination, dir) => (replace, meta, imagePath) => {
// (filereader) => (file) => {

module.exports = {
  move: lib,
  modify: lib,
}
