/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0,
        right = nums.length - 1
    
    while (left < right){
        if(nums[left] < nums[right]) break;
        var mid = Math.floor((left + right)/2)
        if (nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }
    return nums[left]
};