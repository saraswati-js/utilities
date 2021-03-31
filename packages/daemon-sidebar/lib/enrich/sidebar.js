module.exports = (frontmatter) => ({
  /**
   * TODO: Fix this so that it returns an array regarldess of format so I don't break it later.
   * 
   * Take these for example:
   *    * Audi/Supercars 
   *    * [Audi, Supercars]
   * 
   * Will return either:
   *    * [Audi/Supercars]
   *    * [Audi, Supercars]
   */
  sidebar: frontmatter.sidebar || [ 'Unlisted' ],
  ...frontmatter,
})
