const os = require('os')
const faker = require('faker')

const interlace = (source1, source2) => {
  var result = [];

  source1.forEach((o, i) => {
    result.push(o)
    result.push(source2[i])
  })

  return result
}

module.exports = (multiplier = 5) => {
  const ps = faker.lorem.paragraphs(multiplier).split(os.EOL)
  const headings = new Array(multiplier).fill(`## ${faker.lorem.words(3)}`)

  return interlace(headings, ps).join('\n')
}
