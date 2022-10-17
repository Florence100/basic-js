const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let repeatString = '';
  let resultString = '';
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes || 0;
  console.log(String(options.addition))
  let addition;
  if (String(options.addition) === 'false') {
    addition = 'false';
  } else {
    addition = (options.addition === null) ? 'null' : options.addition || '';
  }

  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let additionSeparator = options.additionSeparator || "|";
  let separatorLength = separator.length;
  let additionSeparatorLength = additionSeparator.length;
  
  str = String(str);
  console.log(addition)

  if (additionRepeatTimes > 0) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatString = repeatString + addition + additionSeparator;
    }
  } else {
    repeatString = addition + additionSeparator;
  }
  repeatString = repeatString.slice(0, repeatString.length - additionSeparatorLength)

  let repeatResultString = str + repeatString + separator;

  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
    resultString += repeatResultString;
    }
  } else {
    resultString = repeatResultString;
  }

  return resultString.slice(0, resultString.length - separatorLength);
}

module.exports = {
  repeater
};


console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))
