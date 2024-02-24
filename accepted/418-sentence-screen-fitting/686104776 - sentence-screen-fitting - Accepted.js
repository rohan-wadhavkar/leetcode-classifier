/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    let timesSentenceFitsInScreen = 0;
    let row = 0;
    let column = 0;
    let wordIndex = 0;
    let remainingColumns = cols;
    while(row < rows){
        const word = sentence[wordIndex];
        
        if(word.length > cols){
            return 0;
        }
        
        
        if(word.length <= remainingColumns){
            remainingColumns = remainingColumns - word.length - 1;
            wordIndex++;
            if(wordIndex === sentence.length){
                timesSentenceFitsInScreen++
                wordIndex = 0;
            }
        }else {
            row++;
            remainingColumns = cols;   
        }    
    }
    
    return timesSentenceFitsInScreen;
};