/**
 * Build the file DB to use.
 */
const frontmatter = require('./markdown/markdown')
const validate = require('./validate/validate')
const { without, reformat } = require('./format')
const { files, justPath } = require('./markdown/files')
const enrich = require('./enrich')

// TODO: Currently each enrich file there is some early bailing.
//    Add a `truthy` function to the db somehow so that I don't need to do this.
//    Use composition/currying to do this instead.
// const { ifElse } = require('./utils')

/**
 * TODO: Enrich the frontmatter with:
 *    - Default slug
 * 
 * TODO: Use this function to nest the DB object by project as well.
 * 
 * NOTES: Can I have parents w/o content?
 *    - If there is no content/no link then what default data do we put in there?
 *      - Or no default data but rather do a 404
 */
module.exports = (path) => files(path)
  .map(justPath)
  .map(frontmatter)
  .map(validate)
  
  // These are all identity functions currently.
  // .map(ifElse('slug', frontmatter, enrich.withSlug))
  .map(enrich.withSlug)
  .map(enrich.withId)
  .map(enrich.withSidebar)
  // .map(enrich.withSidebarLabel)
  .map(enrich.withDelta)
  .map(enrich.withTags)
  .map(enrich.withProject)
  .map(enrich.withBasepath)
  
  // Route needs to go after project.
  // Project forms the base of the route if it exists.
  .map(enrich.withRoute)
  
  // This does not actually work as intended yet.
  // .map(enrich.withEditLink)
  
  // This is debug code.
  .map(without)
  .reduce(reformat, {});