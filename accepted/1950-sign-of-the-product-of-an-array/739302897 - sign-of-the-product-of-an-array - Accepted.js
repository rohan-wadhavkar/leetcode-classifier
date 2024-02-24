/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
   
    let ans = 1;
    for (let num of nums) {
        if (num == 0) return 0;
        if (num < 0) ans = -ans;
    }
    return ans;
};