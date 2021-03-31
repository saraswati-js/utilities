// TODO: Build multiple files
// TODO: See if there is a cheap and easy way to render & reload the index.html file.
// TODO: Gotta be sure that we can add to the sub paths
console.clear()
console.log()

const { write } =  require('./lib/utils')
const saraswatiDb = require('./lib/db')
const db = saraswatiDb('./docs')
const sidebar = require('./lib/sidebar')

write.test(sidebar(db))
