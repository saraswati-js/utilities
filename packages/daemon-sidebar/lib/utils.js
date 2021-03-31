const fs = require('fs')

const isTruthy = value => !!value

module.exports = {
  // Setup a config to use a default from a config file "somewhere". It's injected in when the app is booted.
  useDefault: config => formatter => { },

  // This shouldn't be in here or either utils.js should be it's own directory.
  write: {
    test: (data) => {
      // TODO: Get these file paths from the yaml file?
      const template = fs.readFileSync('./example/index.tpl', 'utf8')
      const updatedTemplate = template.replace('{OBJECT_DATA}', JSON.stringify(data))
      fs.writeFileSync('./example/index.html', updatedTemplate, 'utf8')
    },
  },
}
