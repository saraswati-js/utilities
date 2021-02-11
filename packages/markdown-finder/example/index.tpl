<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Test</title>
    <style>
      body { padding-left: 20px; }
      ul { list-style-type: circle; padding: 5px; margin-left: 8px; }
    </style>
  </head>
  <body>
    <ul></ul>
  </body>
  <script>
    const textTag = (title) => document.createTextNode(title)

    const atag = (text, href) => {
      newlink = document.createElement('a')
      newlink.innerHTML = text
      newlink.setAttribute('href', href)

      return newlink
    }

    const innerTag = (text, meta) => {
      const tag = (!meta.metadata)
        ? textTag(text)
        : atag(meta.name, meta.metadata.href)

      return tag
    };

    const createList = (parent, array) => {
      array.forEach(function (o) {
        var li = document.createElement('li')
        var ul

        parent.appendChild(li).appendChild(innerTag(o.name, o))

        if (o.children.length > 0) {
          ul = document.createElement('ul')
          li.appendChild(ul)
          createList(ul, o.children)
        }
      })
    }

    var object = {OBJECT_DATA}

    createList(document.querySelector('ul'), object)
  </script>
</html>
