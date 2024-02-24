/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    
    let fill = (sr, sc, newColor, oldColor) => {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != oldColor) {
            return;
        }
        image[sr][sc] = newColor;
        fill(sr+1, sc, newColor, oldColor);
        fill(sr-1, sc, newColor, oldColor);
        fill(sr, sc+1, newColor, oldColor);
        fill(sr, sc-1, newColor, oldColor);

    }
    
    if (image == null || image[sr][sc] == newColor) {
        return image;
    }
    
    fill(sr, sc, newColor, image[sr][sc]);
    return image;
};