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
  let resObj= {}
  domains.forEach(a => {
    let reverseDomain = a.split('.').reverse();
    let DNS_s = '';
    reverseDomain.forEach((e) => {
      DNS_s += `.${e}`;
      resObj[DNS_s] ? resObj[DNS_s] += 1 : resObj[DNS_s] = 1;
    })

  })
  return resObj;
}

module.exports = {
  getDNSStats
};
