/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  
    let map = {};
    
    for (let letter of magazine) {
        !map[letter] ? map[letter] = 1 : map[letter]++
    }
    
    for (let letter of ransomNote) {
        if (!map[letter]) return false 
        map[letter]--
    }
    return true;
};