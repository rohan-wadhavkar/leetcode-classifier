/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
       
    for (let i=1; i< grid.length; i++) {
        for (let j=1; j<grid[i].length; j++){
            if (grid[i][0] == grid[0][0]) {
                if (grid[i][j] != grid[0][j]) return false;
            }    
            else {
               if(grid[i][j]!=(1-grid[0][j])) return false;
            }
        }
    }
        return true;
};