// https://gist.github.com/codeguy/6684588#gistcomment-3231045

module.exports = (frontmatter) => {
  // TODO: Validate as well that it's a slug.
  if (frontmatter.slug) {
    return frontmatter
  }

  const text = frontmatter.title
  const start = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
  const end = "aaaaaeeeeeiiiiooooouuuunc------"

  const newText = text.split('').map(
    (letter, i) => letter.replace(new RegExp(start.charAt(i), 'g'), end.charAt(i)))

  const slug = newText
    .toString()                 // Cast to string
    .toLowerCase()              // Convert the string to lowercase letters
    .trim()                     // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/&/g, '-y-')       // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-');    // Replace multiple - with single -

  return {
    slug,
    ...frontmatter,
  }
}
