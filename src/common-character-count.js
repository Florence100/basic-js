const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(s1.split(''))
  let array1 = s1.split('');
  let array2 = s2.split('');

  let array12 = [];
  for (let i = 0; i < array1.length; i ++) {
    if (array2.includes(array1[i])) {
      array12.push(array1[i]);
      let index2 = array2.indexOf((array1[i]));
      array2.splice(index2, 1);
    }
  }
  return(array12.length)

}

console.log(getCommonCharacterCount("aabcc", "adcaa"))

module.exports = {
  getCommonCharacterCount
};
