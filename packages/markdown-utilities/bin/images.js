#!/usr/bin/env node

const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const chalk = require('chalk')
const yargs = require('yargs')
const { managed: { move } } = require('..')

const START_DIR = yargs.argv.startdir
const PUBLIC_DIR = yargs.argv.public
const DEST_DIR = yargs.argv.destdir || ''

if (!START_DIR || !DEST_DIR) {
  throw new Error('--startdir and--destdir are required. Example: markdown-modifier --startdir=./START --public=PUBLIC_DIR --destdir=./DEST_DIR')
}

klaw(START_DIR)
  .on('data', item => {
    const extensions = ['.md', '.mdx']

    // We only care about markdown files.
    if (!extensions.includes(path.extname(item.path))) {
      return
    }

    const rebuilt = move(item.path, PUBLIC_DIR, DEST_DIR)

    fs.writeFileSync(item.path, rebuilt)
  })
  .on('end', () => {
    console.log()
    console.log(chalk.black.bgGreen('\t--------------------------'))
    console.log(chalk.black.bgGreen('\tEverything moved over, yay'))
    console.log(chalk.black.bgGreen('\t--------------------------\n'))
  })
  .on('error', (err) => {
    console.log(chalk.white.bgRed('There was an error:\n'))
    console.log(err.message)
  })


