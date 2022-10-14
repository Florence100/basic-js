const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  // let stringSum;
  let sum;

  function countSum(number) {
    sum = 0;
    let array = String(number).split('');
    for (let i = 0; i < array.length; i++) {
        sum = sum + Number(array[i]);  
      }
      // console.log(sum) 
      stringSum = String(sum).split('');
      if (stringSum.length > 1) {
        countSum(sum);
      };
  }

  countSum(n);

  return sum;
}

// console.log(getSumOfDigits(35))

module.exports = {
  getSumOfDigits
};
