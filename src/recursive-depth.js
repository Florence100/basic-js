const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }

  calculateDepth(arr) {
    const self = this;
    let count = 0;

    if (Array.isArray(arr) && arr.length) {
      count = count + 1 + Math.max(...arr.map((e) => self.calculateDepth(e)))
    } else {
      if (Array.isArray(arr) && !arr.length) {
        count += 1;
      }
    }

    return count;
  }
}

// let test = new DepthCalculator();
// console.log(test.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]))

module.exports = {
  DepthCalculator
};
