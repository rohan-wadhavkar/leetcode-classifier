/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    
    nums.sort((a,b) => a-b);
    if (nums.length <= 4) {
        return 0;
    }
    
    let min = Number.MAX_VALUE;
    let i = 0;
    let j = nums.length - 4;
    while (j < nums.length) {
        min = Math.min(min, Math.abs(nums[j] - nums[i]));
        j++;
        i++;
    }
    return min;
};