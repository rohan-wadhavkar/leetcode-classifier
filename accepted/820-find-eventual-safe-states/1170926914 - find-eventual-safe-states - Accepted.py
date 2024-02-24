class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        
        n = len(graph)
        safe = {}  #graph for node -> boolean; True = safe. If not in graph, not yet visited

        def dfs(node):
            #memoization
            if node in safe:
                return safe[node] #return already visited/calculated node 
            
            safe[node] = False  #mark unsafe for the moment bc visiting
            for nei in graph[node]:
                if not dfs(nei):
                    return False

            safe[node]=True  #means traversed path and found safe
            return True

        ans = []
        for i in range(n):
            if dfs(i):
                ans.append(i)
        return ans        