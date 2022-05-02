const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr16 = n.split('-');

  if (arr16.length !==6) return false;

  let res = arr16.map(e => isNaN(parseInt(e, 16)) ? false : true).indexOf(false);
  
  return res>-1 ? false: true;
}

module.exports = {
  isMAC48Address
};
