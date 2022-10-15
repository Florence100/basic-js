const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let array = str.split('');
  let result = "";

  for (let i = 0; i < array.length; i ++) {
    if (result.slice(result.length - 1, result.length) !== array[i]) {
      result = result + '1' + array[i];
    } else {
      let count = Number(result.slice(result.length - 2, result.length - 1));
      count += 1;
      result = result.slice(0, result.length - 2) + count + result.slice(result.length - 1)
    }
  }
  return result.split('1').join('');
  
}

console.log(encodeLine("abbcca"))

module.exports = {
  encodeLine
};
