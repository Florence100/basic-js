const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let sum = 0;
  let currentSum = 0;

  function getColumn (matrix, j) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] !== 0) {
        currentSum += matrix[i][j];
      } else {
        break;
      }
    }
    // console.log(currentSum);
    sum += currentSum;
    currentSum = 0;
  }

  for (let j = 0; j < matrix[0].length; j ++) {
    getColumn(matrix, j);
  }

  return sum;  
}

// matrix = [
//    [0, 1, 1, 2],
//    [0, 5, 0, 0],
//    [2, 0, 3, 3]
//   ]
  
// console.log(getMatrixElementsSum(matrix))

module.exports = {
  getMatrixElementsSum
};
