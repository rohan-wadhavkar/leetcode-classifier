class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:

        # union find/ DSU (disjoin set union). O(N)/O(N)
        # we find the first edge occurring in the graph that is already connected
        root = [i for i in range(len(edges)+1)]
        rank = [1] * (len(edges)+1)

        def find(x):
            #path compression
            if x == root[x]:
                return x
            root[x] = find(root[x])
            return root[x]
        
        def union(x,y):
            x = find(x)
            y = find(y)
            
            #both nodes already connected to same parent
            if x == y:
                return False
            
            if rank[x] > rank[y]:
                root[y] = x
            elif rank[y] > rank[x]:
                root[x] = y
            else:
                root[y] = x
                rank[x]+=1
            return True

        for n1,n2 in edges:
            #if false, return n1,n2. NEED to return boolean from union as x and y get changed in union method
            if not union(n1,n2):
                return n1,n2
        
        return []

        
        


    
        