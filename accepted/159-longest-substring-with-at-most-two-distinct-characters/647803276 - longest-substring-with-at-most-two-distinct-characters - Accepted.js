/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let map = new Map();
    
    while (right < s.length) {
        map.set(s[right], right);
        right += 1;
        if (map.size == 3) {
            let minIndex = Math.min(...map.values());
            map.delete(s[minIndex]);
            left = minIndex + 1;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    
    
    return maxLen;
};