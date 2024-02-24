class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        
        if board is None:
          return [[]]

        rows, cols = len(board), len(board[0])
        directions = [[1,0],[-1,0],[0,1],[0,-1]]

        def dfs(r,c):
          if r < 0 or r == rows or c < 0 or c == cols or board[r][c] != "O":
            return

          board[r][c] = "T" #T for temp (cell can't be captured because linked to border 'O' cell )
          for dr, dc in directions:
            dfs(r+dr,c+dc)

        
        #if border cell is "O", we start DFS and any connecting cell can't be captured so we turn to temp "T"
        #make sure all 4 borders! not just left and top (made that mistake)
        for i in range(rows):
            if board[i][0] == "O":
                dfs(i,0)
            if board[i][cols-1] == "O":
                dfs(i,cols-1)
        for j in range(cols):
            if board[0][j] == "O":
                dfs(0,j)
            if board[rows-1][j] == "O":
                dfs(rows-1,j)

        # now all cells are either X, O, or T. T's cannot be captured, but remaining O's can. Turn them to X's to capture them
        for i in range(rows):
            for j in range(cols):
                if board[i][j] == "O":
                    board[i][j] = "X"

        # turn back T's to O's as they were unable to be captured
        for i in range(rows):
            for j in range(cols):
                if board[i][j] == "T":
                    board[i][j] = "O"

        return board


      


