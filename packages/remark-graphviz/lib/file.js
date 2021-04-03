const visit = require('unist-util-visit')
const plantuml = require('plantuml')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

function plugin() {
  return tree =>
    new Promise(async (resolve, reject) => {
      const nodesToChange = []
      visit(tree, 'code', node => {
        if (node.lang !== 'graphviz') {
          return
        }

        nodesToChange.push({ node })
      })

      for (const { node } of nodesToChange) {
        try {
          const filename = `${uuid.v4()}.svg`
          const diagram = await plantuml(node.value)
          const diagrampath = path.join(__dirname, '..', 'test', filename)
          
          fs.writeFileSync(diagrampath, diagram, 'utf8')

          node.type = 'image'
          node.alt = filename
          node.url = `./${filename}`
        } catch (e) {
          console.log('error', e);
          return reject(e);
        }
      }

      resolve()
    })
}

module.exports = plugin
