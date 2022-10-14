const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  let array = n.split('-');
  if (array.length !== 6) {
    return false;
  }
  let subArray = [];
  for (let i = 0; i < array.length; i ++){
    let subStr = array[i].split('');
    for (let j = 0; j < subStr.length; j ++) {
      subArray.push(subStr[j].toUpperCase())
    }
  }

  for (let i = 0; i < subArray.length; i ++) {
    if (!values.includes(subArray[i])) {
      return false;
    }
    return true;
  }
}

// console.log(isMAC48Address('00-1B-63-84-45-E6'))

module.exports = {
  isMAC48Address
};
