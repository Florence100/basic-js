const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let domainsArray = [];
  let subArray = [];
  let resultArray = [];
  let result = {};

  for (let i = 0; i < domains.length; i ++) {
    domainsArray.push(domains[i].split())
    for (let j = 0; j < domainsArray[i].length; j ++) {
      subArray.push(String(domainsArray[i][j]).split('.'));
    }
  }

  for (let i = 0; i < subArray.length; i ++) {
    let currentElement = '.' + subArray[i][subArray[i].length - 1];
    resultArray.push(currentElement)
    for (let j = 2; j < subArray[i].length + 1; j++) {
      currentElement = currentElement + '.' + subArray[i][subArray[i].length - j];
      resultArray.push(currentElement)
    }
  }

  for (let i = 0; i < resultArray.length; i ++) {
    if (!(resultArray[i] in result)) {
      result[resultArray[i]] = 1;
    } else {
      let count  = result[resultArray[i]];
      count += 1;
      result[resultArray[i]] = count;
    }
  }

  return result
}

module.exports = {
  getDNSStats
};

// domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
//   ]

// console.log(getDNSStats(domains))
