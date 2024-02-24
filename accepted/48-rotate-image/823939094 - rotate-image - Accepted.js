
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    
    //transpose
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    //swap
    
    for (let i=0; i < n; i++) {
        for (let j = 0; j < (Math.floor(n/2)); j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }
    return matrix;
};