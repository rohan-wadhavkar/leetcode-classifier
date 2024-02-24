class Node {
    constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
};
// from the description: 
// We can construct a Quad-Tree from a two-dimensional area using the following steps:

// 1. If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
// 2. If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
// 3. Recurse for each of the children with the proper sub-grid.
var construct = function(grid) {
   // pick out the first element
   let firstElement = grid[0][0]; 
   // if any of the elements are unequal to this element, this is definetly not a leaf node
   // (remember, a leaf node is one where ALL of the grid's values are equal)
   let isLeaf = !grid.some(rows => rows.some(element => element !== firstElement)); 
   // initialize result;
   let result = null; 
   
   //take note: 
   //case 1: this is a leaf node
   //in this case, the "val" of the node can be the value of ANY of elements in the grid
   //since they are all the same
   
   //case 2: this is not a leaf node
   //in this case, the "val" of the node should be either 1 or 0, the problem specifies 
   //that either works just fine. 
   
   //therefore, in either case, the value we picked out in "firstElement" works as the "val"
   
   // base case, exactly as stated in No.1 in the instructions 
   if (isLeaf) {
       result =  new Node(firstElement, isLeaf, null, null, null, null); 
       return result;
   } else {
       // x and y are used to split the grid into 4 quadrants
       // x is the maximum "i" index for rows to be included in the topLeft and topRight
       // y is the maximum "j" index for cols to be included  in the topLeft and bottomRight
       let x = y = Math.floor((grid.length - 1) / 2); 
       
       // initialize four empty grids, one for each quadrant
       let topLeft = new Array(x + 1).fill().map(row => new Array(x + 1));
       let topRight = new Array(x + 1).fill().map(row => new Array(x + 1));
       let bottomLeft = new Array(x + 1).fill().map(row => new Array(x + 1));
       let bottomRight = new Array(x + 1).fill().map(row => new Array(x + 1));
    
       // fill the mini grids up
       for (let i = 0; i < grid.length; i++) {
           for (let j = 0; j < grid[i].length; j++) {
               let currentElement = grid[i][j]; 
               
               if (i <= x && j <= y) {
                   topLeft[i][j] = currentElement;
               } else if (i <= x && j > y) {
                   topRight[i][j - y - 1] = currentElement;
               } else if (i > x && j <= y) {
                   bottomLeft[i - x - 1][j] = currentElement; 
               } else if (i > x && j > y) {
                   bottomRight[i - x - 1][j - y - 1] = currentElement; 
               }
           }
       }
       
       // call construct recursively on all four mini grids
       result = new Node(firstElement, isLeaf, construct(topLeft), construct(topRight), construct(bottomLeft), construct(bottomRight)); 
       
       return result; 
   }    
};