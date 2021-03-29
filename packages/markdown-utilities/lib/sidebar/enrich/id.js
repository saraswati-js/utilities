const { v4 } = require('uuid')

module.exports = (frontmatter) => ({
  id: frontmatter.id || v4(),
  ...frontmatter,
})
