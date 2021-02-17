const fs = require('fs')
const path = require('path')
const md5 = require('md5-file')
const mkdirp = require('mkdirp')
const gm = require('gray-matter')

const regexReplace = (destination, dir) => (replace, meta, imagePath) => {
  const unchanged = `![${meta}](${imagePath})`
  const filePath = path.join(dir, imagePath)
  const fileExists = fs.existsSync(path.join(dir, imagePath))

  // Don't replace external URLs
  if (!/^\.{1,2}\//.test(imagePath)) {
    return unchanged
  }

  // Ignore files that don't exixt.
  if (!fileExists) {
    return unchanged
  }

  const hash = md5.sync(filePath)
  const split = hash.match(/.{1,5}/g)
  const newFile = split.join('/') + path.extname(imagePath)
  const intermediatePath = split.slice(0, split.length - 1).join('/')
  const finalImageName = split.slice(split.length - 1) + path.extname(imagePath)
  const newDestination = [destination, intermediatePath]
  const finalFilePath = [...newDestination, finalImageName].join('/')

  mkdirp.sync(newDestination.join('/'))
  fs.copyFileSync(filePath, finalFilePath)

  return `![${meta}](/${newFile})`
}

/**
 * What move() does
 *    Give it a path to a markdown file then it will move all images to
 *    a destination path + it will replace the image links.
 * 
 * How this thing works:
 *    1. Take a markdown file path
 *    2. Find all image links
 *    3. Get image path
 *    4. Make sure image exists at [relative] path
 *    5. Get md5 hash of that path
 *    6. Split md5 hash at every 5 intervals (charaters)
 *    7. Append file extension
 *    8. Replace url in markdown with new destination path in public folder
 *    9. Create directory for that new file
 *    10. Move file to that area in the public folder
 *    11. Return/save markdown file.
 * 
 * Benefits:
 *   Directory based on hash is essentially a database of files/directories
 *     If images are shared across markdown files the checksum will 
 *      make sure they are shared
 *   Images do not require inlining
 *   Super fast
 */
module.exports = (filereader) => (file, destination) => {
  const dir = path.resolve(path.parse(file).dir)
  const fileContents = filereader.readFileSync(file).toString()

  const { content, data, excerpt, orig } = gm(fileContents)
  const pattern = /(?:!\[(.*?)\]\((.*?)\))/ig

  return gm.stringify(
    content.replace(pattern, regexReplace(destination, dir)),
    data
  )
}
