const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resString = '';
  for (let i = 0; i < str.length; i++) {
    let countChar = 1;

    while (str[i] === str[i+1]) {
      countChar++;
      i++;
    }

    if(countChar === 1) resString+=`${str[i]}`;
    if(countChar !== 1) resString+=`${countChar}${str[i]}`;
  }
  
  return resString;
}

module.exports = {
  encodeLine
};
