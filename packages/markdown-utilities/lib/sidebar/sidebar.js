/**
 * Build the sidebar.
 * 
 * TODO: Keep an array of all the keys and this is how we'll determine it's siblings.
 * TODO: Make sure to sort by delta
 * TODO: Add alt to links
 * TODO: Allow external links (opens new browser window)
 */

const findWhere = (array, key, value) => {
  // Adapted from https://stackoverflow.com/questions/32932994/findwhere-from-underscorejs-to-jquery
  t = 0; // t is used as a counter
  while (t < array.length && array[t][key] !== value) { t++; }; // find the index where the id is the as the aValue

  if (t < array.length) {
    return array[t]
  } else {
    return false;
  }
}

// TODO: Sidebar should filter by projects
// TODO: Add next previous links here ... somehow. Or ask someone todo this for me ... :'(
module.exports = (paths) => {
  // Adapted from http://brandonclapp.com/arranging-an-array-of-flat-paths-into-a-json-tree-like-structure/
  var tree = [];

  const iterator = Object.keys(paths)
  
  for (const path of iterator) {
    var currentLevel = tree;
    const sidebar = (typeof path === 'string') ? path.split('/') : path

    for (var j = 0; j < sidebar.length; j++) {
      var part = sidebar[j];
      var existingPath = findWhere(currentLevel, 'name', part);

      if (existingPath) {
        currentLevel = existingPath.children;
      } else {
        var newPart = {
          name: part,
          // TODO: Rethink this for the sidebar functionality.
          ...((sidebar.length - 1) === j) && { metadata: paths[path] },
          children: [],
        }

        currentLevel.push(newPart);
        currentLevel = newPart.children;
      }
    }
  }
  
  return tree;
}