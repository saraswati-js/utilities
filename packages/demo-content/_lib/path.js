const faker = require('faker')
const words = require('./static/words.json')

const pathParts = words.slice(1, Math.floor(words.length * .10))

module.exports = {
  urlpath: (maxMarts = 7) => {
    let paths = []
    // The number of path segments I'll make
    const randMaxPathParts = faker.datatype.number({
      min: 3,
      max: maxMarts,
    })

    // Loop through randMaxPathParts times
    for (let i = 0; i < randMaxPathParts; i++) {
      // Get a random number at each iteration
      const segment = faker.datatype.number(pathParts.length)

      paths.push(pathParts[segment])
    }

    const segments = paths.filter(x => x !== undefined)

    return {
      segments,
      path: segments.join('/'),
    }
  }
}