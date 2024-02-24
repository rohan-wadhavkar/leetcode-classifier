/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
function maxNumberOfFamilies(n, reservedSeats) {
    // [1, 2, 3,    4, 5, 6, 7,    8, 9, 10]
    const cache = new Map;
    let count = 2 * n;

	// populates map
    reservedSeats.forEach(([row, seat]) => {
      cache.has(row) ? cache.get(row).push(seat) : cache.set(row, [seat]);
    })

    for (const [_, val] of cache) {
      let [m, l, r] = [false, false, false]

      val.forEach(seat => {
        if (seat > 3 && seat < 8) m = true;
        if (seat > 1 && seat < 6) l = true;
        if (seat > 5 && seat < 10) r = true;
      })

	  /*
		if theres a seat taken in all 3 regions, its not possible to have any group of 4 adjacents => count -=2
		if any of the three regions are taken but not all 3, 1 group of 4 can fit => count--
		otherwise 2 groups can fit => do nothing
	  */ 
      if (l && r && m) {
        count -= 2;
      } else if (l || r || m) {
        count--;
      }
    }

    return count;
  };
