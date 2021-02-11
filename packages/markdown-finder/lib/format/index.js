// Build a unique key for each entry.
const uniqueKey = (fm) => (`${fm.sidebar.join('/')}/${fm.title}`)

// Reducer function to reformat an object to 
const reformat = (accumulator, currentValue) => ({
  ...accumulator,

  // TODO: This should log any duplicates to a file.
  [uniqueKey(currentValue)]: {
    ...currentValue
  }
})

// Clean everything up so that it only contains these properties.
const without = ({ title, sidebar, slug, file, href, project }) => ({
  title, sidebar, slug, file, href, project,
})

module.exports = {
  reformat, without,
}