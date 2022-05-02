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
  str = String(str);
  let res = [];
  let separator = [];
  if (options.addition === null) options.addition = 'null';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.separator) options.separator = '+';
  
  if (options.additionRepeatTimes) {
    for (let i = 0; i < (+options.additionRepeatTimes); i++) {
      separator.push(options.addition);
    } 
  } else {separator.push(options.addition)}
  
    
  if (options.repeatTimes) {
    for (let i = 0; i < (+options.repeatTimes); i++) {
      res.push(`${str}${separator.join(options.additionSeparator)}`);
    }
  } else {res.push(`${str}${separator.join(options.additionSeparator)}`);}
  

  return res.join(options.separator);
}

module.exports = {
  repeater
};
