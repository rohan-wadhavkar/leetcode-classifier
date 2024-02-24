class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:

        if prerequisites is None:
            return []

        ordered = []
        adjList = {}
        status = {}

        #"nv" = not visited
        #"v" = visiting
        #"d" = done (course completed)
        for num in range(numCourses):
            adjList[num] = []
            status[num] = "nv"
        
        for i,j in prerequisites:
            adjList[i].append(j)

        def dfs(node):
            if status[node] == "d":
                return True
            if status[node] == "v":
                return False

            status[node] = "v"
            for prereq in adjList[node]:
                if not dfs(prereq):
                    return False
            status[node] = "d"
            ordered.append(node)
            return True
        
        for node in adjList:
            if not dfs(node):
                return []

        return ordered 
        

        