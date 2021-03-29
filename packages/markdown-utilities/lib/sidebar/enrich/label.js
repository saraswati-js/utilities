module.exports = (frontmatter) => ({
  label: frontmatter.label || frontmatter.title,
  ...frontmatter,
})
