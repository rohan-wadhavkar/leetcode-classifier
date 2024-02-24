class Solution:
    
    # #BFS implementation
    # def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        
    #     if grid is None:
    #       return 0
        
    #     rows, cols = len(grid), len(grid[0])
    #     visited = set()
    #     maxArea = 0

    #     def bfs(r,c):
    #       q = deque()
    #       q.append((r,c))
    #       visited.add((r,c))
    #       count = 1
    #       while q:
    #           row,col = q.popleft()
    #           directions = [[1,0],[-1,0],[0,1],[0,-1]]
    #           for dr,dc in directions:
    #               r,c = row + dr, col + dc
    #               if r in range(rows) and c in range(cols) and grid[r][c] == 1 and (r,c) not in visited:
    #                   q.append((r,c))
    #                   visited.add((r,c))
    #                   count += 1
    #       nonlocal maxArea 
    #       maxArea = max(maxArea, count)


    #     for r in range(rows):
    #       for c in range(cols):
    #         if grid[r][c] not in visited and grid[r][c] == 1:
    #           bfs(r,c)

    #     return maxArea

    #DFS implementation
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        
        if grid is None:
          return 0
        
        rows, cols = len(grid), len(grid[0])
        visited = set()
        maxArea = 0

        def dfs(r,c):
          if (
                r not in range(rows)
                or c not in range(cols)
                or grid[r][c] == 0
                or (r, c) in visited
            ):
                return 0

          visited.add((r, c))
          return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1 and (r, c) not in visited:
                  maxArea = max(maxArea, dfs(r, c))
        return maxArea

