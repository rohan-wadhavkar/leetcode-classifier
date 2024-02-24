class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:

        #dfs imp
#         graph = {}

#         for i,j in edges:
#             if i in graph:
#                 graph[i].append(j)
#             if i not in graph:
#                 graph[i] = [j]
#             if j in graph:
#                 graph[j].append(i)
#             if j not in graph:
#                 graph[j] = [i]
        
#         visited = set()
#         def dfs(node):
#             if node == destination:
#                 return True
#             for nei in graph[node]:
#                 if nei not in visited:
#                     visited.add(nei)
#                     if dfs(nei):
#                         return True
#             return False
        
#         return dfs(source)



        #bfs imp
            graph = collections.defaultdict(list)
            for a,b in edges:
                graph[a].append(b)
                graph[b].append(a)
            
            q = collections.deque()
            q.append(source)

            visited = set()
            while q:
                node = q.popleft()
                if node == destination:
                    return True
                elif node not in visited:
                    visited.add(node)
                    for nei in graph[node]:
                        q.append(nei)

            return False



        
            

        