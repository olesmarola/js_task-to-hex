'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 255 is converted
 * то 'ff'. You should not use .toString() method.
 *
 * Conversion algorithm:
 * Divide the number by 16 with the remainder
 * 59/16 = 3 (remainder 11)
 * 3/16 = 0 (remainder 3)
 * When the whole part is 0, then we take all
 * the remainders in the reverse order
 *
 * 50 === '3b'
 *
 * @param {number} value
 *
 * @return {string}
 */
function toHex(value) {
  if (value === 0) {
    return '0';
  }

  const hexAlphabet = '0123456789abcdef';
  let hexValue = '';
  let reverseValue = value;

  while (reverseValue > 0) {
    hexValue += hexAlphabet[reverseValue % 16];
    reverseValue = Math.floor(reverseValue / 16);
  }
  return hexValue.split('').reverse().join('');
}

module.exports = toHex;
