/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const m = grid.length;
	const n = grid[0].length;
    
    if (grid==null) return 0;
    
function dfs(grid, y, x) {
  if ( y < 0 || x<0 || y >= m || x >= n) {
    return
  }

  if (grid[y][x] === '1') {
    grid[y][x] = '0'
  } 
    else {
    return
  }

  dfs(grid, y + 1, x)
  dfs(grid, y - 1, x)
  dfs(grid, y, x + 1)
  dfs(grid, y, x - 1)
}
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    
    return count;
};