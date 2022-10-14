const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let array = []

  for (let i = 0; i < arr.length;  i ++) {
    if (arr[i] !== -1) {
      array.push(arr[i]);
    }
  }
  let arraySort = (array.sort(function(a, b) {
    return a - b;
  }))
  
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      if (j < arraySort.length) {
        arr.splice(i, 1, arraySort[j]);
        j++;
      }
      // for (let j = 0; j < arraySort.length; j++) {
      //   console.log(arraySort[j])
      //   arr.splice(i, 1, arraySort[j])
      // }
    }
  }
return arr
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

module.exports = {
  sortByHeight
};
