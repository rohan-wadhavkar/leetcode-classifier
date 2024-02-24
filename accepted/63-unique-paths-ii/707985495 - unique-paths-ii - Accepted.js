/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length, n = obstacleGrid[0].length 
    
    if(obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return false
    
    if (obstacleGrid[0][0] == 1) return false
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                obstacleGrid[i][j] = 1
                continue
            }
            
            if(obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0
                continue
            }
            
            if(i === 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j - 1]
                continue
            }
            
            if(j === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j]
                continue
            }
            
            obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
        }
    }
    
    
    return obstacleGrid[m - 1][n - 1]
};