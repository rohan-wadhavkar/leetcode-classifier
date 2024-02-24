class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """

        #BFS:  search from gate to empty rooms
        # Since BFS guarantees that we search all rooms of distance d before searching rooms of distance d + 1, the distance to an empty room must be the shortest.
        #O(MN), O(MN)
        
        rows, cols = len(rooms), len(rooms[0])
        directions = [[1,0],[0,1],[-1,0],[0,-1]]
        q = deque()

        for i in range(rows):
            for j in range(cols):
                if rooms[i][j] == 0:
                    q.append((i,j))

        while q:
            r, c = q.popleft()
            for dr, dc in directions:
                if r+dr < 0 or r+dr == rows or c+dc < 0 or c+dc == cols or rooms[r+dr][c+dc] != 2147483647:
                    continue
                else:
                    rooms[r+dr][c+dc] = rooms[r][c]+1
                    q.append((r+dr,c+dc))
            
            

