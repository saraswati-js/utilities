console.clear()
const path = require('path')
const normalizedPath = require('path').join(__dirname, './');

const t = require('fs').readdirSync(normalizedPath).forEach((file) => {
  if (file === 'index.js') return

  const filename = path.basename(file, '.js')
  const capitalized = filename.charAt(0).toUpperCase() + filename.slice(1)
  const key = `with${capitalized}`

  module.exports[key] = require(path.join(__dirname, file))
})
