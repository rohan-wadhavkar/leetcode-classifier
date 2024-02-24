/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    
    let len = arr.length;
    
    let left = 0;
    let right = len-1;
    let lowestTrue = -1;
    
    while (right >= left) {
        let mid = Math.floor(right+left/2);
        
        if (arr[left] == left) return left;
        
        if (arr[mid] == mid) {
            lowestTrue = arr[mid];
            right = mid - 1;
        }
        else if (arr[mid] < mid) {
            left = mid + 1;
        }
        else right = mid-1 
    }
    
    
    return lowestTrue;
    


};