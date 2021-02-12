/**
 * The way to use this.
 */
const path = require('path')
const { copyFileSync, readdirSync } = require('fs')

const DIR = path.join(__dirname, 'static')
const mediaPath = path.join(__dirname, '..', 'media')

/**
 * This will copy an image to {path} then returns a markdown image path
 * @param {*} path 
 * @param {*} newpath 
 */
const markdownImage = (image, dirToCopyTo) => {
  copyFileSync(image, `${dirToCopyTo}/heroimage.png`, { overwrite: true })
  
  return `![hero image](./heroimage.png)`
}

// Call the generate image function
module.exports = {
  markdownImage,
  
  // Images.
  imageList: () => readdirSync(mediaPath).map(i => `${mediaPath}/${i}`),

  /**
   * Same as above but it generates a data image so it's embedded into the markdown directly.
   * @param {*} path 
   * @param {*} newpath 
   */
  markdownImageAsData: (path, newpath) => `![](${imagepath})`,
}