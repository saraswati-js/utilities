// TODO: Add validation all around. Perhaps it can be added to each enrich file.
// TODO: Make a validate directory.
// TODO: Add validation for each property
const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

module.exports = (frontmatter) => {
  const yamlConfig = path.join(__dirname, '..', 'data/defaults.yml')

  // TODO: Memoize, or pass it in ala Redux
  const file = fs.readFileSync(yamlConfig, 'utf8')
  const defaults = YAML.parse(file)

  if (!frontmatter.title) {
    throw new Error(defaults.requires.title)
  }

  return frontmatter
}