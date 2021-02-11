const ejs = require('ejs')

const frontmatter = require('./front-matter')
const read = require('fs').readFileSync;
const join = require('path').join;
const path = join(__dirname, '/static/markdown.tpl.ejs')

module.exports = (opts) => ejs.compile(read(path, 'utf8'), { filename: path })(opts)
