/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  
    if (grid.length==0 || !grid) return 0;
    
    let rows = grid.length;
    let cols = grid[0].length;
    
    let maxCount = 0;
    let rowHits = 0;
    let colHits = new Array(grid[0].length).fill(0)
    
    for (let row = 0; row< rows; row++) {
        for (let col=0; col<cols; col++) {
            
            if (col == 0 || grid[row][col-1] == 'W'){
            rowHits = 0;
            for (let k = col; k < cols; k++) {
                if (grid[row][k] == 'W') break;
                else if (grid[row][k] == 'E') rowHits +=1;
            }
            }
            
            if (row == 0 || grid[row-1][col] == 'W'){ 
            colHits[col] = 0;
            for (let k = row; k < rows; k++) {
                if (grid[k][col] == 'W') break;
                else if (grid[k][col] == 'E') colHits[col] +=1;
            }
            }
            
            if (grid[row][col] == '0') maxCount = Math.max(maxCount, rowHits + colHits[col]);
        }
    }
    return maxCount;
};