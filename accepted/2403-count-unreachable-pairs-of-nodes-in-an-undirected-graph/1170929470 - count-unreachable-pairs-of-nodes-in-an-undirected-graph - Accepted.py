class Solution:
        def countPairs(self, n: int, edges: List[List[int]]) -> int:
        
            def union(x: int, y: int) -> None:
                def find(x: int) -> int:
                    while x != id[x]:     # if x is not root, keep tracing the root.
                        id[x] = id[id[x]] # Path compression.
                        x = id[x]         # trace root.
                    return x              # Root found.
        
                rx, ry = map(find, (x, y)) # Find the roots of x and y. 
                if rx != ry:               # Different roots means there are not in same group. 
                    # Merge smaller group into bigger group. => Weighted Quick Union.
                    if sz[rx] > sz[ry]:
                        sz[rx] += sz[ry]
                        id[ry] = id[rx]
                        roots.discard(ry) # smaller group root removed after union.
                    else:
                        id[rx] = id[ry]
                        sz[ry] += sz[rx]
                        roots.discard(rx)
                        
            id = list(range(n)) # Initialize the root of each vertex as itself.
            sz = [1] * n        # Initialize the size of each group as 1.
            roots = {*range(n)} # Initialize the root of each vertex as itself.
            for a, b in edges:
                union(a, b)     # Perform Union Find.
            pairs = 0    
            for r in roots:     # Traverse roots.
                n -= sz[r]      # Number of the total size of non-visited groups.
                pairs += n * sz[r] # Add the pairs between group r and non-visited groups.
            return pairs


    # def countPairs(self, n: int, edges: List[List[int]]) -> int:
        
    #     # union find

    #     #initialize root array
    #     root = [i for i in range(n)]
    #     rank = [1] * n

    #     def find(x):
    #         #path compression
    #         if root[x] == x:
    #             return x
    #         #recursively find and set all child nodes to root node    
    #         root[x] = find(root[x])
    #         return root[x]

    #         # while x != root[x]:
    #         #     root[x] = root[root[x]]
    #         #     x = root[x]
    #         # return x
        
    #     def union(x,y):
    #         x = find(x)
    #         y = find(y)
    #         if x == y:
    #             return 0
    #         else:
    #             if rank[x] > rank[y]:
    #                 root[y] = x
    #             elif rank[y] > rank[x]:
    #                 root[x] = y
    #             else:
    #                 root[y] = x
    #                 rank[x] += 1
    #             return 1
        
    #     numComponents = n
    #     for i,j in edges:
    #         numComponents -= union(i,j)
        
    #     if numComponents == 1:
    #         return 0

    #     graph = collections.defaultdict(list)

    #     for i in range(n):
    #         graph[root[i]].append(i)



    # # The total number of pairs of nodes with one node in the first component and the other node in any of the      remaining components would be equal to the number of nodes in the first component multiplied by the total number of nodes except the first component's nodes, i.e., 4 * (7 - 4) = 12 pairs.

    #     # count of unreachable node pairs.
    #     numberOfPairs = 0
    #     # num nodes left after visiting each component
    #     remainingNodes = n

    #     for key in graph.keys():
    #         componentSize = len(graph[key])
    #         numberOfPairs += componentSize * (remainingNodes - componentSize)
    #         remainingNodes -= componentSize
        
    #     return numberOfPairs