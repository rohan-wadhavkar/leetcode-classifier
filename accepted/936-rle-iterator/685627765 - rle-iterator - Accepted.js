/**
 * @param {number[]} encoding
 */
var RLEIterator = function(encoding) {
    this.index = 0;
    this.encoding = encoding;
};

RLEIterator.prototype.next = function(n) {
    while (n > 0 && this.index < this.encoding.length) {

        let count = this.encoding[this.index];
        let num = this.encoding[this.index + 1];

        if (count < n) {
            n -= count;
            this.index += 2;
        } else {
            this.encoding[this.index] = count - n;
            return num;
        }
    }
    
    return -1;
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */