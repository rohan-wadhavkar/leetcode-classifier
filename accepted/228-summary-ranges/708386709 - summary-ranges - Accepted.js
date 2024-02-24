/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    if (nums.length ==  1) return [nums[0].toString()];
    
    let result = [];
    
    let left = 0;
    for (let right = 1; right <= nums.length; right++) {
        let prev = right-1;
        if (nums[right] - nums[prev] < 2) {
            continue;
        }
        else {
            if (left == prev) result.push(nums[left].toString());
            else if (left != prev)
                result.push(`${nums[left]}->${nums[prev]}`);
                
            left = right; 
        }
    }
    
    return result;
};