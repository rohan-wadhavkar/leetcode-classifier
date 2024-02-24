/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    let a = 0;
    let b = 1;
    let sum;
    
    while(n>1) {
        sum = a+b;
        a = b;
        b = sum;
        n--;
    }
    
    return sum
};



//recursive run 

// var fib = function(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
    
//     return fib(n-1) + fib(n-2)
// }