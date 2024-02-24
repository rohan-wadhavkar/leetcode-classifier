class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        if prerequisites is None:
            return True

        adj = {}
        status = {}
        for num in range(numCourses):
            adj[num] = []
            status[num] = "nv"
        #"nv" = not visited
        #"v" = visiting
        #"d" = done (course completed)
        for i,j in prerequisites:
            adj[i].append(j)

        def dfs(node):
            if status[node] == "d":
                return True
            if status[node] == "v":
                return False

            status[node] = "v"
            for prereq in adj[node]:
                if not dfs(prereq):
                    return False
            status[node] = "d"
            return True

        for node in adj:
            if not dfs(node):
                return False

        return True
            



        