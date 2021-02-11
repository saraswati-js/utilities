// https://astexplorer.net/#/gist/c57b1fe84c85c5c71c1f8883860ee758/d55a51259f931ec04943c23e224530404dd23acd

const mimes = require('mime/lite')
const fs = require('fs')
const path = require('path')
const gm = require('gray-matter')

const modify = (dir) => (replace, meta, imagePath) => {
  // Don't replace external URLs
  if (!/^\.{1,2}\//.test(imagePath)) {
    return `![${meta}](${imagePath})`
  }

  // Only relative paths will be replaced.
  mime = mimes.getType(path.extname(imagePath))

  const encoded = fs.readFileSync(path.join(dir, imagePath), 'base64')
  const embed = `data:${mime}';base64,${encoded}`

  return `![${meta}](${embed})`
}

module.exports = (filereader) => (file) => {
  const dir = path.resolve(path.parse(file).dir)
  const fileContents = fs.readFileSync(file).toString()

  const { content, data, excerpt, orig } = gm(fileContents)
  const pattern = /(?:!\[(.*?)\]\((.*?)\))/ig

  return content.replace(pattern, modify)
}