class Solution:
    # A breadth-first search has no way of knowing if a particular discovery of a node would give us the cheapest path to that node. The only possible way for BFS (or DFS) to find the shortest path in a weighted graph is to search the entire graph and keep recording the minimum distance from the source to the destination node. 
    # Our problem limits the number of stops to k. As a result, we need not search the paths with lengths > k + 1
    
    # Let E be the number of flights and N be the number of cities.
        # Time complexity: O(N+E⋅K)
        # Space complexity: O(N+E⋅K)

    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        # adj contains all the neighbors of node X and the corresponding price it takes to move to a neighbor
        adj = defaultdict(list) 
        for s, d, p in flights:
            adj[s].append((d, p))

        # minimum price to reach a node from the src node (initialize with inf)
        costs = [float("inf")] * n

        # queue storing {node, distance} pairs. Initially, the queue should have only {src, 0}
        queue = deque()
        queue.append((src, 0))
        
        # At each pair {node, distance}, iterate over all the neighbors of node. For each neighbour, check if dist[neighbor] is less than distance + the price of the edge. If it is, then update dist[neighbor] and push {neighbor, dist[neighbor]} onto the queue
        while queue and k >= 0:
            m = len(queue)
            for _ in range(m): # "_" is just placeholder for iteration
                curr, cost = queue.popleft()
                for node, price in adj[curr]:
                    if cost + price < costs[node]:
                        costs[node] = cost + price
                        queue.append((node, costs[node]))
            # after iterating over all the nodes in the current level, decrease stops by one. We've visited all the nodes at a particular level and are ready to visit the next level of nodes
            k -= 1
        
        # Once we reach a condition where either the queue is empty or stops == k, we have our answer as dist[dst]. If dist[dst] hasn't changed from the initial large value, then we never reached it, so return -1
        return costs[dst] if costs[dst] != float("inf") else -1
    

        