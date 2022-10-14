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
// class DepthCalculator {


  // count = this.count;
  // count = 0;
  // countArray = this.countArray;
  // countArray = [];

  // calculateDepth(arr) {
  //   this.countArr(arr);
  //   // console.log(this.countArray)
  //   return Math.max.apply(null, this.countArray) + 1;
  // }

  // countArr (myArray) {
  //   for (let i = 0; i < myArray.length; i++) {
  //     if (myArray[i] instanceof Array) {
  //       this.count++;
  //       // console.log(this.count)
  //       for (let j = 0; j < myArray[i].length; j++) {
  //         if (myArray[i][j] instanceof Array) {
  //           let subArr = myArray[i][j];
  //           this.count++;      
  //           this.calculateDepth(subArr)
  //         }
  //       }
  //     }
  //     this.countArray.push(this.count) 
  //   }
  //   this.countArray.push(this.count)
  //   this.count = 0;
  // }
  // }
  
// let test = new DepthCalculator()
// console.log(test.calculateDepth([[[[[[[[[[]]]]]]]]]]))

// module.exports = {
//   DepthCalculator
// };

class DepthCalculator {
  calculateDepth(/* arr */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
