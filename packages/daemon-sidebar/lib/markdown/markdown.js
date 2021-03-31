/**
 * Get the markdown.
 */
const parseMarkdown = require('front-matter-markdown')
const { resolve } = require('path')
const fs = require('fs')

module.exports = path => ({
  repo: '<DYNAMICALLY ADD THE REPO>',
  repoAuthor: '<DYNAMICALLY ADD THE REPO AUTHOR HERE?>',
  file: resolve(path),
  ...parseMarkdown(fs.readFileSync(path))
})
