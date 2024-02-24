var maxProduct = function(nums) {
    let currMax = nums[0];
    let currMin = nums[0];
    let result = Math.max(...nums);
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        
        let tempPrevMax = currMax;
        currMax = Math.max(nums[i] * currMax, nums[i], nums[i] * currMin);
        currMin = Math.min(nums[i] * currMin, nums[i], nums[i] * tempPrevMax);
        
        result = Math.max(currMax, result);
    }
    return result;
}