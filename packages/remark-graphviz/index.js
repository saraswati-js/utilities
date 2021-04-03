const inline = require('./lib/inline')
const file = require('./lib/file')

module.exports = {
  file,
  inline,
  pluginChooser: (which) => (
    (which === 'inline') ? inline : file
  )
}
