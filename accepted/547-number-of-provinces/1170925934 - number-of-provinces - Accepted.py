class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:

        n = len(isConnected)
        root = [i for i in range(n)]
        rank = [1] * n

        def find(x):
            if x == root[x]:
                return x
            root[x] = find(root[x])
            return root[x]

        def union(x,y):
            x = find(x)
            y = find(y)
        
            if x == y:
                return 0
            if rank[x] > rank[y]:
                root[y] = x
            elif rank[y] > rank[x]:
                root[x] = y
            else:
                root[y] = x
                rank[x] += 1
            return 1
        
        numProvinces = n
        for i in range(n):
            for j in range(n):
                if i != j and isConnected[i][j] == 1:
                    numProvinces -= union(i,j)

        return numProvinces
        

            