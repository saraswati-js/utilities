#!/usr/bin/env node

console.clear()

const { sidebarLib } = require('../lib')
const saraswatiDb = sidebarLib.db
const db = saraswatiDb('./_posts')
const sidebar = sidebarLib.sidebar

// sidebarLib.write.test(sidebar(db))
// console.log(JSON.stringify(db))
// console.log(JSON.stringify(sidebar(db)))
sidebar(db)
