/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */


/*Input: 
username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], 
timestamp = [1,2,3,4,5,6,7,8,9,10], 
website = ["home","about","career","home","cart","maps","home","home","about","career"]

Output: 
["home","about","career"]
*/

var mostVisitedPattern = function(username, timestamp, website) { 
//create map of user data - O(n)
    const userMap = {};
    for (let i = 0; i < username.length; i++) {
        if (!userMap[username[i]]) userMap[username[i]] = [];
        const data = { time: timestamp[i], site: website[i] };
        userMap[username[i]].push(data);
    };

//seqMap to hold quantity of sequences
//max to track max frequency
//freqMap to hold quantities & their sequences
//O(n^3)
    let seqMap = {}, max = 0, freqMap = {};
    for (let user in userMap) {
        const userData = userMap[user], set = new Set();
//Sort user data by timestamp - O(logn)
        userData.sort((a, b) => a.time - b.time);
        
        for(let i = 0; i < userData.length - 2; i++) {
            for(let j = i + 1; j < userData.length - 1 ; j++) {
                for(let k = j + 1; k < userData.length ; k++) {
                    const key = `${userData[i].site}-${ userData[j].site}-${userData[k].site}`;
//If it's a repeated sequence by this user, move to next sequence (slightly less memory/faster exit that just doing if !set.has(key))
                    if (set.has(key)) continue;
//Otherwise, add key to set and update frequency in our seqMap
                    set.add(key);
                    seqMap[key] = seqMap[key] ? seqMap[key] + 1 : 1;
//update freqMap & max if needed           
                    let freq = seqMap[key];
                    max = Math.max(freq, max);
                    if (freqMap[freq]) freqMap[freq].push(key);
                    else freqMap[freq] = [key];
                }
            }
        }
    }
//O(log(freqMap[max].length)) + O(3n)
//Use max to find the possible site 3-sequences, sort to get the lowest alphabetically & split into array
    console.log(userMap);
        console.log(seqMap);
    console.log(freqMap);

    return freqMap[max].sort()[0].split("-");
};




// var mostVisitedPattern = function(username, timestamp, website) { 

//    let tracksArray = [{ id: 1, country: "USA", count: 3, genre: "hip hop" }, { id: 2, country: "USA", count: 6, genre: "hip hop" },{ id: 21, country: "USA", count: 6, genre: "hip hop" },{ id: 25, country: "USA", count: 6, genre: "hip hop" }, { id: 3, country: "RUSSIA", count: 7, genre: "hip hop" },{ id: 1, country: "Russia", count: 12, genre: "hip hop" },{ id: 2, country: "RUSSIA", count: 2, genre: "hip hop" },{ id: 3, country: "Germany", count: 20, genre: "hip hop" }]
    
//     let bestTracksByCountry = {};
//     let bestTracksGlobally = {};
    
//      let binaryInsertionSort = (arr, target) => {
//         let left = 0;
//         let right = arr.length;
        
//         while (left < right) {
//             const mid = Math.floor((left + right)/2)

// 		    if (target.count > arr[mid].count) {
// 			    right = mid
// 		    } else {
//                 left = mid + 1
// 		    }
//         }
//         arr.splice(left, 0, target)
//     }
     
     
//     for (let track of tracksArray) {
//         //console.log(track.country);
//         // bestTracksByCountry[track.country] ? bestTracksByCountry[track.country].push(track) :  bestTracksByCountry[track.country] = [track];
//         bestTracksByCountry[track.country] ? binaryInsertionSort(bestTracksByCountry[track.country],track) :  bestTracksByCountry[track.country] = [track];

//         bestTracksGlobally[track.id] ? bestTracksGlobally[track.id].count+=track.count :  bestTracksGlobally[track.id] = track;
//     }
    
//     // for (let country in bestTracksByCountry) {
//     //     bestTracksByCountry[country].sort((a,b) => b.count - a.count);
//     // }
    
//     let bestTracksGloballyArray = [];
//     for (let trackId in bestTracksGlobally) {
//         bestTracksGloballyArray.push(bestTracksGlobally[trackId]);
//     }
//     bestTracksGloballyArray.sort((a,b) => b.count - a.count)

    
//     let getBestNTracksinACountry = (country, n) => {
//         console.log(bestTracksByCountry[country].slice(0,n))
//     }
    
//     let getBestNTracksGlobally = (n) => {
//         console.log(bestTracksGloballyArray.slice(0,n))
//     }
    
   

//     getBestNTracksinACountry("USA", 3);
//     getBestNTracksGlobally(7);
//     console.log('end');

// }




