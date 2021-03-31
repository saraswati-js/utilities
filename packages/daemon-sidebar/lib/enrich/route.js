
module.exports = (frontmatter) => {
  const lastPathPart = (frontmatter.route || frontmatter.slug).replace(/\//g, '')

  return {
    href: [frontmatter.basepath, lastPathPart].join('/'),
    ...frontmatter,
  }
}
