module.exports = (frontmatter) => {
  const { repo, repoAuth, file } = frontmatter

  return {
    edit: `https://${repo}/${repoAuth}/${file}`,
    ...frontmatter,
  }
}
