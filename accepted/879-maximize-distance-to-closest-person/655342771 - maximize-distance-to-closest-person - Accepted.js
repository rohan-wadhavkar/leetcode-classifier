/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    
    let leftPointer = -1;
    let maxDistance = 0;
    let n = seats.length-1;
    
    for (let i = 0; i <= n; i++) {
        if (seats[i] == 0)
            continue;
        if (leftPointer == -1) {
            maxDistance = i;

        }
        else {
            maxDistance = Math.max(maxDistance, Math.floor((i-leftPointer) / 2));

        }
        leftPointer = i;


    }
    if (seats[n] == 0) {
        maxDistance = Math.max(maxDistance, n - leftPointer);
    }
    return maxDistance;
};