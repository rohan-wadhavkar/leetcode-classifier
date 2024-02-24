/**
 * @param {number} num
 * @return {number}
 */
var addDigits = (num) => {
    
   
        if (num < 10) {
            return num;
        }
    num =  (num % 10) + Math.floor(num/10);
    return addDigits(num);
        
};