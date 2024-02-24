class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:

        root = [i for i in range(n)]
        rank = [1] * n

        def find(x):
            #path compression
            if root[x] == x:
                return x
            root[x] = find(root[x])
            return root[x]
        
        def union(x, y):
            x = find(x)
            y = find(y)

            if x == y: #already connected
                return 0
            #union by rank optimization
            elif rank[x] > rank[y]:
                root[y] = x
            elif rank[y] > rank[x]:
                root[x] = y
            else:
                root[y] = x
                rank[x] += 1
            return 1
        
        # n is considering all nodes as not connected from the start
        res = n
        for x,y in edges:
            res -= union(x,y)
        
        return res


        