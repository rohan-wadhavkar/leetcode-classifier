/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //two pointers
    let laggingPointer = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[laggingPointer++] = nums[i];
        }
    }
    for (i = laggingPointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};