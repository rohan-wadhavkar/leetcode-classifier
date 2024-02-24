/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  
    let dimensions = binaryMatrix.dimensions(); 
    let rowSize = dimensions[0];
    let columnSize = dimensions[1];
    
    let left = 0;
    let right = columnSize-1;
    
    let leftMostAccurate = -1;
    
    let goDown = (column) => {
        let goDownRow = 0
        while (goDownRow < rowSize) {
            if (binaryMatrix.get(goDownRow,column) == 1) return true;
            else goDownRow++;
        }
        return false;
    }
    
    while (left <= right) {
        let half = Math.floor((left+right)/2);
        
        if (goDown(half)) {
            leftMostAccurate = half;
            right = half-1;
        }
        else left = half+1;
    }
    return leftMostAccurate;
};