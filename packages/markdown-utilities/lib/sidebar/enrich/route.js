
module.exports = (frontmatter) => {
  const lastPathPart = (frontmatter.route || frontmatter.slug).replace(/\//g, '')

  return {
    // href: [frontmatter.project, frontmatter.basepath, lastPathPart].join('/'),
    href: [frontmatter.basepath, lastPathPart].join('/'),
    ...frontmatter,
  }
}
