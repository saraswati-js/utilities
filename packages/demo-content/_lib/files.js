const { writeFileSync, mkdirSync } = require('fs')

const markdownPath = (dir, file) => {
  const directory = `${dir}/${file}`
  const fullPath = `${dir}/${file}/document.md`

  return {
    directory,
    fullPath
  }
}

const mkfileuuid = (dir, file, fileContent) => {
  const deets = markdownPath(dir, file)
  writeFileSync(deets.fullPath, fileContent)
}

const articleDir = (dir) => {
  mkdirSync(dir, { recursive: true })
}

module.exports = {
  mkfileuuid,
  markdownPath,
  articleDir,
}