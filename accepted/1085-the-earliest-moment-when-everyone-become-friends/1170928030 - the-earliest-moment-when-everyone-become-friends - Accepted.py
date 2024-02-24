class Solution:
    def earliestAcq(self, logs: List[List[int]], n: int) -> int:

        logs.sort(key = lambda x: x[0])

        root = [i for i in range(n)]
        rank = [1] * n

        def find(x):
            if root[x] == x:
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
                rank[x]+=1
                root[y]=x
            return 1

        notConnected = n - 1
        for ts,x,y in logs:
            notConnected -= union(x,y)
            if notConnected == 0:
                return ts
        
        return -1


            
        