console.clear()

const path = require('path')
const yargs = require('yargs')
const faker = require('faker')
const { writeFileSync } = require('fs')

const COUNT = yargs.argv.count || 500
let words = []

/**
 * Figure out algorithm to separate out large amounts of directories (500 or more?)
 */
for (let i = 0; i < COUNT; i++) {
  words.push(...faker.random.words().split(' ').map(e => e.toLowerCase()))
}

const FILEPATH = path.join(__dirname, '..', '_lib', 'static')
writeFileSync(`${FILEPATH}/words.json`, JSON.stringify(words, null, '  '))
