/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastGoodIndexPosition = nums.length - 1;
    
    for (let i=nums.length - 2; i >=0; i--) {
        if (i+nums[i] >= lastGoodIndexPosition) {
            lastGoodIndexPosition = i;
        }
    }
    return lastGoodIndexPosition == 0;
};