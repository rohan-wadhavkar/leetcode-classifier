/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
        let profit = Number.MIN_VALUE;
        let valley = Number.MAX_VALUE;
    
        prices.forEach(element => {
            valley = Math.min(valley,element)
            profit = Math.max(profit, element - valley)});
        return profit;
        
};