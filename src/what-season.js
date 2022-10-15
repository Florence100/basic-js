const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  const seasons = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [11, 0, 1]
  }

  // if ((Object.prototype.toString.call(date) !== '[object Date]')) {
  //      throw new Error('Invalid date!');
  //   }

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  for (let i of Object.keys(seasons)) {
    try {
      if (seasons[i].includes(date.getMonth())) {
      return i;
    }
    } catch {
      throw new Error('Invalid date!');
    }
  }
}

// const fake = function toString() {
//     return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
// };

// console.log(fake())
// console.log(getSeason(fake()))


module.exports = {
  getSeason
};







