var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key]) {
        this.map[key].push([value,timestamp]);
    }
    else {
        this.map[key] = [[value,timestamp]];
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map[key]) {
        return "";
    }
    else {
        let left = 0;
        let right = this.map[key].length;

        while (left < right) {
            let mid = (Math.floor((left+right)/2));
            if (timestamp < this.map[key][mid][1]) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        if (left == 0) {
            return "";
        }
        return this.map[key][left-1][0];
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */