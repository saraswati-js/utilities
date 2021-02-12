console.clear()

// const fs = require('fs')
const path = require('path')
const { managed: { move } } = require('../')
const markdownFilePath = path.join(__dirname, './fixtures/foo.md')

// Do move stuff
const destinationBaseDir = path.join(__dirname, 'fixtures/images')
move(markdownFilePath, destinationBaseDir)

// Do modify stuff
// const move = require('../lib/move')
// const filePath = path.join(__dirname, './fixtures/foo.md')
// const rebuilt = modify(filePath)
// fs.writeFileSync('./test.md', rebuilt)
