class MovingAverage {
    constructor(size) {
        this.size = size;
        this.array = [];
        this.sum = 0;
    }
    
    next(val) {        
        if (this.array.length == this.size) {
			this.sum -= this.array.shift()
        }
        
        this.array.push(val);
        this.sum += val;
        
        return this.sum / this.array.length;
    }
}

// class MovingAverage {
//     constructor(size) {
//         this.average = 0;
//         this.queue = new Array(size).fill(0);
//         this.size = size;
//         this.head = 0;
//         this.count = 0;
//     }
    
//     next(val) {
//         if(this.count < this.size) {
//             this.count++;
//             // Multiply rolling average based on new count
//             this.average = this.average * (this.count-1) / this.count;
//         }

//         // Temporarily store old tail value
//         const tail = (this.head + 1) % this.size;
//         // Calculate how much to reduce rolling average based on tail value
//         const removal = this.count > 0 ? this.queue[tail] / this.count : 0;

//         // Overwrite old tail value
//         this.head = tail;
//         this.queue[this.head] = val;

//         // Calculate how much to increase rolling average based on new value
//         const addition = val / this.count;

//         // Update rolling average
//         this.average = this.average - removal + addition;
//         return this.average;
//     }
// }