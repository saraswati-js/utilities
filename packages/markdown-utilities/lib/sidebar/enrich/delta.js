module.exports = (frontmatter) => ({
  delta: frontmatter.delta || 0,
  ...frontmatter,
})
