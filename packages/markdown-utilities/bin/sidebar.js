#!/usr/bin/env node

console.clear()

const fs = require('fs')
const { sidebarLib } = require('../lib')
const saraswatiDb = sidebarLib.db
const db = saraswatiDb('./_fixtures/_posts')
const sidebar = sidebarLib.sidebar
const data = sidebar(db)

// const template = fs.readFileSync('./example/index.tpl', 'utf8')
// const updatedTemplate = template.replace('{OBJECT_DATA}', JSON.stringify(data))
fs.writeFileSync('./_fixtures/sidebar.json', JSON.stringify(data, null, 2), 'utf8')
