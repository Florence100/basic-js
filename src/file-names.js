const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newAray = [];

  for (let i = 0; i < names.length; i ++) {
    if(!(newAray.includes(names[i]))) {
      newAray.push(names[i])
    } else {
      let count = 1;
      while (true) {
        if (newAray.includes(names[i] + "(" + String(count) + ")")) {
          count += 1;
        } else {
          newAray.push(names[i] + "(" + String(count) + ")");

          break
        }
      }
    }
  }
  return newAray
}

  

// let names = ['doc', 'doc', 'image', 'doc(1)', 'doc'];
// console.log(renameFiles(names))

module.exports = {
  renameFiles
};
