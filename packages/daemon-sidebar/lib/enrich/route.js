
module.exports = (frontmatter) => {
  const lastPathPart = (frontmatter.route || frontmatter.slug).replace(/\//g, '')

  // console.log({
  //   route: [frontmatter.project, frontmatter.basepath, lastPathPart].join('/'),
  // })

  const route = [frontmatter.project, frontmatter.basepath, lastPathPart].join('/')

  return {
    href: [frontmatter.project, frontmatter.basepath, lastPathPart].join('/'),
    ...frontmatter,
  }
}
