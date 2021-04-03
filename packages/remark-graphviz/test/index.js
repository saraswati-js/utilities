const remark = require('remark')
const fs = require('fs')
const path = require('path')
const { pluginChooser } = require('../index')

const deets = fs.readFileSync(path.join(__dirname, './fixture.md'), 'utf8')

remark()
  .use(pluginChooser('inline'))
  .data('settings', { emphasis: '*', strong: '*' })  
  .process(deets, function (err, file) {
    if (err) throw err
    console.log(String(file))
  })
