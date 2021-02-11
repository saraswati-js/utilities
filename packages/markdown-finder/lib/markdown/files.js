const klawSync = require('klaw-sync')
const path = require('path')

const filterFn = item => {
  return path.extname(item.path) === '.md'
}

const opts = {
  traverseAll: true,
  filter: filterFn
}

module.exports = {
  files: path => klawSync(path, opts),
  justPath: obj => obj.path
}
