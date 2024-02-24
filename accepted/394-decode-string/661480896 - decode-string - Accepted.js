/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    if (s.length == 0) {
        return '';
    }
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++){
        
        if (s[i] != ']'){
            stack.push(s[i]);
        }
        else {
            let encapsulatedString = '';
            let popChar = '';
            let popDigit = '';
            let multiplier = '';
            while (stack[stack.length-1] != '[') {
                popChar = stack.pop();
                encapsulatedString = popChar + encapsulatedString;
            }
            stack.pop();
            while (stack && !isNaN(stack[stack.length-1])) {
                popDigit = stack.pop();
                multiplier = popDigit + multiplier;
            }
            encapsulatedString = encapsulatedString.repeat(parseInt(multiplier));
            stack.push(encapsulatedString);
        }
    }
    return stack.join('');
    
};