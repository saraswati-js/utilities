const visit = require('unist-util-visit')
const svg64 = require('svg64')
const plantuml = require('plantuml')

function plugin() {
  return tree =>
    new Promise(async (resolve, reject) => {
      const nodesToChange = []
      visit(tree, 'code', node => {
        if (node.lang !== 'graphiz') {
          return
        }

        nodesToChange.push({ node })
      })

      for (const { node } of nodesToChange) {
        try {
          node.type = 'image'
          node.alt = 'a graph diggity doo!'
          node.url = svg64(await plantuml(node.value))
        } catch (e) {
          console.log('error', e);
          return reject(e);
        }
      }

      resolve()
    })
}

module.exports = plugin
