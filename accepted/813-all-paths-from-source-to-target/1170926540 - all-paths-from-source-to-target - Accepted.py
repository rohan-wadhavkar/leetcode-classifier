class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:

    #backtracking imp
        # target = len(graph) - 1
        # results = []

        # def backtrack(curr_node, path):
        #     # if we reach the target, no need to explore further.
        #     if curr_node == target:
        #         results.append(list(path))
        #         return
        #     # explore the neighbor nodes one after another.
        #     for next_node in graph[curr_node]:
        #         path.append(next_node)
        #         backtrack(next_node, path)
        #         path.pop()
        # # kick of the backtracking, starting from the source node (0).
        # path = [0]
        # backtrack(0, path)

        # return results
    
    #797. All Paths From Source to Target
    #bfs imp

        target = len(graph)-1 #target is last node
        q = collections.deque([[0]]) #q will have current
        res = [] #list of paths hitting target

        while q:
            path = q.popleft()
            node = path[-1] #get current node of path
            if node == target:
                res.append(path)
            else:
                for nei in graph[node]:
                    nextPath = path.copy() #need to copy path and add nei
                    nextPath.append(nei)
                    q.append(nextPath)

        return res



