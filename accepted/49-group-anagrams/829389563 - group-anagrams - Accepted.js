/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        //97 is the numeric value of the character 'a', so if you subtract 97 from a character between 'a' and 'z', you are mapping that character to an index of your array between 0 and 25.
        for (let char of str)  {
            count[char.charCodeAt()-97]++;
        }
        let key = count.join("#");
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)