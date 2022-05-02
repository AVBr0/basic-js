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
  calculateDepth(arr) {
    let defaultDepth = 1;
    let resArr = [];

  	for (let e of arr) {
      	if (Array.isArray(e)) 
        defaultDepth += this.calculateDepth(e);
        resArr.push(defaultDepth);
        defaultDepth = 1;
    }

	  return resArr.length > 0 
          ? Math.max(...resArr)
          : defaultDepth;

  }
}

module.exports = {
  DepthCalculator
};
