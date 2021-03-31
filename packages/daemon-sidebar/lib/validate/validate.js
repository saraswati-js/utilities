// TODO: Add validation all around. Perhaps it can be added to each enrich file.
// TODO: Make a validate directory.
// TODO: Add validation for each property
const fs = require('fs')
const YAML = require('yaml')
const path = require('path')

module.exports = (frontmatter) => {
  const yamlPath = path.join(__dirname, '..', 'data/defaults.yml')
  const file = fs.readFileSync(yamlPath, 'utf8')
  const defaults = YAML.parse(file)

  if (!frontmatter.title) {
    throw new Error(defaults.requires.title)
  }

  return frontmatter
}
