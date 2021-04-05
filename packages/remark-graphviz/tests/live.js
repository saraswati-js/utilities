const remark = require('remark')
const fs = require('fs')
const path = require('path')
const { pluginChooser } = require('../index')

const deets = fs.readFileSync(path.join(__dirname, './fixture.md'), 'utf8')

remark()
  .use(pluginChooser('inline'))
  .process(deets, function (err, file) {
    if (err) throw err

    fs.writeFileSync(path.join(__dirname, './fixture.remade.md'), file, 'utf8')
  })
