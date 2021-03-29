const { write } = require('./sidebar/utils')
const db = require('./sidebar/db')
const sidebar = require('./sidebar/sidebar')

module.exports = {
  sidebarLib: {
    sidebar,
    // docs,
    db,
    write,
  },
}