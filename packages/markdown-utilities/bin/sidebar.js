#!/usr/bin/env node

console.clear()

const reduce = (acc, curr) => {
  const [head, ...tail] = curr

  return {
    ...acc,
    [head.replace('--', '')]: tail[0],
  }
}

const args = process.argv.slice(2)
  .map(arg => arg.split('='))
  .reduce(reduce, {})

if (!args.to || !args.from) {
  console.log('@saraswati-js:sidebar --from=_fixtures/_posts/ --to=./_fixtures/sidebar.json')
  process.exit('')
}

const fs = require('fs')
const { sidebarLib } = require('../lib')
const saraswatiDb = sidebarLib.db
const db = saraswatiDb(args.from)
const sidebar = sidebarLib.sidebar
const data = sidebar(db)

fs.writeFileSync(args.to, JSON.stringify(data, null, 2), 'utf8')
