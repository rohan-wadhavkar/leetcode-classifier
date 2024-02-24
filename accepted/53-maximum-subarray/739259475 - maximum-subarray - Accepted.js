/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
  //starting subarray  
  let currSubArray = nums[0];
  //running Max SubArray
  let maxSubArray = nums[0];
    
    //start at i = 1 since we already have nums[0]
    for (let i = 1; i < nums.length; i++) {
        currSubArray = Math.max(nums[i], currSubArray + nums[i]);
        maxSubArray = Math.max(maxSubArray, currSubArray);
    }
    return maxSubArray;
    
};