class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:

        if grid is None:
            return -1

        N = len(grid)
        q = deque([(0, 0, 1)]) #r, c, length (dont need path elems bc we just need length of path)
        visited = set((0,0))
        direct = [[0,1],[1,0],[0,-1],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]]

        while q:
            r, c, length = q.popleft()
            # out of bounds. because square grid, we can do min/max
            if min(r,c) < 0 or max(r,c) == N or grid[r][c] == 1:
                continue
            if r == N - 1 and c == N - 1: #we were able to reach the end
                return length
            for dr, dc in direct:
                if (r + dr, c + dc) not in visited:
                    q.append((r + dr, c + dc, length + 1))
                    visited.add((r + dr, c + dc))

        return -1

        #O(N) time: goin through each cell once
        #O(N) space for queue
        
        