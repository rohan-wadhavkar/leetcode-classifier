/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    
    let charCounter = {};
    let charArray = [];
    
    for (let char of s) {
        charCounter[char] ? charCounter[char]++ : charCounter[char] = 1;
    }
    
    for (let key in charCounter) {
        charArray.push(charCounter[key]);
    }
    
    charArray.sort((a,b) => b-a);
    
    let deletions = 0;
    
    for (let i = 1; i < charArray.length; i++) {
        while (charArray[i-1] <= charArray[i] && charArray[i] !== 0) {
            charArray[i]--;
            deletions++;
        }
    }
    
    return deletions;
};