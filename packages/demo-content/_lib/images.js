/**
 * The way to use this.
 */
const path = require('path')
const { copyFileSync } = require('fs')

const DIR = path.join(__dirname, 'static')

/**
 * This will copy an image to {path} then returns a markdown image path
 * @param {*} path 
 * @param {*} newpath 
 */
const markdownImage = (dirToCopyTo) => {
  const srcimage = `${DIR}/800x600.png`

  copyFileSync(srcimage, `${dirToCopyTo}/heroimage.png`, { overwrite: true })
  
  return `![hero image](./heroimage.png)`
}

// Call the generate image function
module.exports = {
  markdownImage,

  /**
   * Same as above but it generates a data image so it's embedded into the markdown directly.
   * @param {*} path 
   * @param {*} newpath 
   */
  markdownImageAsData: (path, newpath) => `![](${imagepath})`,
}