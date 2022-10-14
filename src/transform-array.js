const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  
  let result = [];
  
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i ++) {
      // let nextElement = arr[i + 1];
      // let prevElement = arr[i - 1]
      if (arr[i] !== discardNext && arr[i] !== discardPrev && arr[i] !== doubleNext && arr[i] !== doublePrev) {
        result.push(arr[i]);
      } else {
        if ((arr[i] === discardNext)) {
          if (arr[i + 2] === discardPrev) {
            i = i + 2;
          } else if (arr[i + 1] === discardPrev) {
            i = i + 1;
          } else {
            i++;
          }
        } else if ((arr[i] === discardPrev)) {
          if (result.length > 0) {
            result.pop();
          }
        } else if ((arr[i] === doubleNext)) {
          if (i < arr.length - 1) {
            result.push(arr[i + 1 ]);
          }
        } else if ((arr[i] === doublePrev)) {
          if (i > 0) {
            if (arr[i-2] !== discardNext && i < arr.length - 1) {
            result.push(arr[i - 1]);
          }
          }
        }
      }
    }
    } else {
      throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
  }
  return result;
}

// console.log(transform([1, 2, 3, '--discard-next']))

module.exports = {
  transform
};
