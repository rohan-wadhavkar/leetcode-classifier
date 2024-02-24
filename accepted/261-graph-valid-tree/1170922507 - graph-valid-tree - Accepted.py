class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        
        #non optimized advance graph theory
        # if len(edges) != n - 1:
        #     return False
        
        # graph = collections.defaultdict(list)
        # for a, b in edges:
        #     graph[a].append(b)
        #     graph[b].append(a)
        
        # visited = set()
        # def dfs(node,parent):
        #     if node in visited:
        #         return False
        #     visited.add(node)
        #     for nei in graph[node]:
        #         if nei == parent:
        #             continue
        #         if not dfs(nei,node):
        #             return False
        #     return True
        
        # return dfs(0,-1) and len(visited) == n


# For the graph to be a valid tree, it must have exactly n - 1 edges. Any less, and it can't possibly be fully connected. Any more, and it has to contain cycles. Additionally, if the graph is fully connected and contains exactly n - 1 edges, it can't possibly contain a cycle, and therefore must be a tree!
        
# Going by this definition, our algorithm needs to do the following:
    #1 Check whether or not there are n - 1 edges. If there's not, then return false.
    #2 Check whether or not the graph is fully connected. Return true if it is, false if otherwise

    
        if len(edges) != n - 1: 
            return False
    
        graph = collections.defaultdict(list)
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        # We still need a seen set to prevent our code from infinite
        # looping if there *are* cycles (and on the trivial cycles!)
        # cycle could be on 3 nodes (3 edges) and one unconnected node
        
        seen = set()
        def dfs(node):
            if node in seen: 
                return
            seen.add(node)
            for neighbour in graph[node]:
                dfs(neighbour)

        dfs(0)
        return len(seen) == n


        

        