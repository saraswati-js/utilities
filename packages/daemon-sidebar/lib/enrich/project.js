module.exports = (frontmatter) => ({
  project: frontmatter.project || 'project',
  ...frontmatter,
})