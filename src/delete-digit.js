const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = String(n).split('');
  let arrayCopy = array.slice();
  let string = '';
  let numberArray = [];
  let sortNumberArray;
  let maxNumber;
  for (let i = 0; i < array.length; i++) {
    arrayCopy.splice(i, 1);
    for (let j = 0; j < arrayCopy.length; j++) {
      string = string + String(arrayCopy[j]);
    }
    numberArray.push(Number(string))
    arrayCopy = array.slice();
    string = '';
    sortNumberArray = numberArray.slice().sort(function(a, b) {
      return a - b;
    });

    maxNumber = sortNumberArray[sortNumberArray.length - 1];
    // indexMaxNumber = numberArray.indexOf(maxNumber);
    
  }

  // console.log(numberArray)
  // console.log(sortNumberArray)
 return maxNumber;
}

// console.log(deleteDigit(109))
// console.log([ 9, 19, 10 ].sort())

module.exports = {
  deleteDigit
};
