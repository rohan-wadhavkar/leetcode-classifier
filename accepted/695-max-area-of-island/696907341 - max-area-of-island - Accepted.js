/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    let rowLen = grid.length - 1;
    let colLen = grid[0].length - 1;
    
    let maxArea = 0;
    
    let dfs = (x,y) => {
        let count = 0;
        if (x < 0 || y < 0 || x > rowLen || y > colLen || grid[x][y] == 0) return 0;
        else {
            grid[x][y] = 0;
            count++;
            count+= dfs(x-1, y) + dfs(x, y-1) + dfs(x+1, y) + dfs(x, y+1);
        }
        return count;
    }

    for (let i = 0; i <= rowLen; i++) {
        for (let j = 0; j <= colLen; j++) {
            if (grid[i][j] == 1) maxArea = Math.max(maxArea,dfs(i,j));
        }
    }
    return maxArea;
};