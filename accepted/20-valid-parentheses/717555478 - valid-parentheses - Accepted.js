/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map([['(',')'], ['{','}'], ['[',']']]);
    let stack = [];
    
    for (let i = 0; i <s.length; i++) {
        //key present?
        if (map.has(s[i])) {
            stack.push(s[i]);
        }
        else {
            if (stack.length == 0) {
                return false;
            }
            let top = stack.pop();
            if (map.get(top) != s[i]) {
                return false;
            }
        }
    }
    return stack.length == 0;
};