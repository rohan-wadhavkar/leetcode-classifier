/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let reversedString = '';
    
   
    let splitWords = s.split(' ');
    
    for (let j = 0; j < splitWords.length; j++) {
        for (let i = splitWords[j].length-1; i >=0; i--) {
            reversedString += splitWords[j][i];
        }
        
        if (j!= splitWords.length-1) reversedString += ' ';
    }
    
    return reversedString;
};