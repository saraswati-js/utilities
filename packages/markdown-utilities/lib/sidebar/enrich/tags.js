
module.exports = (frontmatter) => ({
  tags: frontmatter.tags || [],
  ...frontmatter,
})
