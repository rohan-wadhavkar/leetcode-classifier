/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    if (!nums) return [];
    
    let ans = [...nums];
    ans.push(...nums);
    return ans;
};