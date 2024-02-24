/**
 * @param {number} x
 * @return {number}
 */

//Remember that the square root of each X must happen within [0, x/2 + 1]
var mySqrt = function(x) {
    var left = 0;
    var right = Math.floor(x / 2) + 1;
    var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};