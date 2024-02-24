var calculateMinimumHP = function(dungeon) {
    let m = dungeon.length;
    let n = dungeon[0].length;
    
    for (let i=m-1;i>=0;i--){
        for (let j=n-1;j>=0;j--) {
        let minPath;
            
        if (i==m-1 && j===n-1) minPath = 1 - dungeon[i][j];
        else if (i===m-1) minPath = dungeon[i][j+1] - dungeon[i][j];
        else if (j===n-1) minPath = dungeon[i+1][j] - dungeon[i][j];
        else minPath = Math.min(dungeon[i+1][j], dungeon[i][j+1]) - dungeon[i][j];
        dungeon[i][j] = Math.max(1, minPath);

        }
    }
    return dungeon[0][0];
};