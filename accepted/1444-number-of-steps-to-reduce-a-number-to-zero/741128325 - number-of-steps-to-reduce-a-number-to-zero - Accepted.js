/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    
    let stepCount = 0;
    
    while (num > 0) {
        let isEven = num % 2 == 0;
        isEven? num = num/2 :num--;
        stepCount++;
    }
    
    return stepCount;
};