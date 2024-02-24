/**
 * BFS
 * *Time: O(N)
 * *Space: O(N)
 */
// Runtime: 108 ms, faster than 86.30% of JavaScript online submissions for Shortest Path in Binary Matrix.
// Memory Usage: 45.5 MB, less than 96.71% of JavaScript online submissions for Shortest Path in Binary Matrix.
const shortestPathBinaryMatrix = grid => {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];

	if (grid[0][0] === 1) return -1;

	const N = grid.length;
	const queue = [[0, 0, 1]];

	while (queue.length) {
		const [row, col, path] = queue.shift();

		if (row === N - 1 && col === N - 1) return path;

		for (const [dx, dy] of directions) {
			let x = row + dx;
			let y = col + dy;

			// if invalid, continue
			if (x < 0 || x >= N) continue;
			if (y < 0 || y >= N) continue;
			if (grid[x][y] !== 0) continue;

			queue.push([x, y, path + 1]);
			grid[x][y] = 1;
		}
	}

	return -1;
};