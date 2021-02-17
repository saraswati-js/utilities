console.clear()

// const fs = require('fs')
const path = require('path')
const { managed: { move } } = require('../')
const fixture1 = path.join(__dirname, './fixtures/foo.md')
const fixture2 = path.join(__dirname, './fixtures/foo-frontmatter.md')

// Do move stuff
const destinationBaseDir = path.join(__dirname, 'fixtures/images')
const newcontent1 = move(fixture1, destinationBaseDir)
const newcontent2 = move(fixture2, destinationBaseDir)

// Look at the data and make sure it looks correct.
// console.log(newcontent1)
// console.log(newcontent2)

