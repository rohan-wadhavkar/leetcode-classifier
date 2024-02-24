/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    
    if (words.length < 1) return 0;
    
    let maxWordChainLength = 1;
    let map = new Map();
    
    //sort in ascending order
    words.sort((a,b) => (a.length-b.length));
    
    for (let word of words) {
        let presentLength = 1;
        
        for (let i = 0; i < word.length; i++) {
            let predecessor = word.slice(0,i) + word.slice(i+1)
            if (map.has(predecessor)) {
               let predecessorLength = map.get(predecessor);
               presentLength = Math.max(presentLength, predecessorLength + 1); 
            }
        }
        map.set(word,presentLength);
        maxWordChainLength = Math.max(maxWordChainLength,presentLength)
    }
    
    return maxWordChainLength;
};