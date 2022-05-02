const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n + '';
  let result = [];
  for(let i=0; i<n.length; i++) {
    let val = n.split('');
    val.splice(i, 1);
    result.push(val.join(''));
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
