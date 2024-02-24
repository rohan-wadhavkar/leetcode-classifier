/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    
    if (s1.length != s2.length) {
        return false;
    }
    
    let idx1 = -1;
    let idx2 = -1;
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == s2[i]) {
            continue
        }
        
        else {
            if (idx1 == -1) {
                idx1 = i;
            }
            else if (idx2 == -1) {
                idx2 = i;
            }
            //more than 2 discrepancies
            else {
                return false;
            }
        }
    }
    
    if (idx1 != -1 && idx2!= -1) {
        let resString = s2.split('');
        
        let temp = s2[idx1];
        resString[idx1] = resString[idx2];
        resString[idx2] = temp;
        
        return s1 == resString.join('');
    }
    return (idx1 == -1 && idx2 == -1);
    
};