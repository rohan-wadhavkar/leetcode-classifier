// Step 1 = create the box which will be formed after rotation
// 'Step 2 = rotate the matrix
// Step 3 = traverse through row while keeping column , keep a pointer which will always point a possible place where you can swap
// Step 4 = if you didn't understand , dry run it...


var rotateTheBox = function(box) {
    let m = box.length;
    let n = box[0].length;
    // let ans = new Array(n);
    // for(let i =0; i<n; i++){
    //     ans[i]=new Array(m);
    // }
    let ans = Array(n).fill().map(() => new Array(m));
    //n*m
    for(let i =0; i<m; i++){
        
        for(let j =0; j<n;j++){
            ans[j][m-i-1]=box[i][j];
        }
    }
    for(let i =0; i<m; i++){
        let index = n-1;
        for(let j =n-1; j>=0; j--){
            if(ans[j][i]==='#'){
                let temp = ans[j][i];
                ans[j][i]=ans[index][i];
                ans[index][i]=temp;
                index--;
            }else if(ans[j][i]=='*'){
                index=j-1;
            }
        }
    }
    return ans;
};