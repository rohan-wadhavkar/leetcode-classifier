class Solution:
    #O(N*E)/O(N*E)
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        #graph[source] contains all destination nodes (dest) that the signal can travel to from the source node (source). For each destination node, there will be a pair (time, dest). Here, time denotes the time required for the signal to travel from source to dest
        # u = source, v = target node , w = time it takes for a signal to travel from source to target
        graph = defaultdict(list)
        for u, v, w in times:
            graph[u].append((v, w))

        # initialize the queue with the node currNode as k and store the corresponding time required as 0
        queue = deque([(0, k)])
        visited = {}

# Pop the front node currNode from the queue
# Traverse all the edges connected to currNode. Add the adjacent node neighborNode to the queue only if the signal takes less time than the value at signalReceivedAt[neighborNode]. Update the time at signalReceivedAt[neighborNode] to current signal time
        while queue:
            t, u = queue.popleft()
            if u not in visited or t < visited[u]:
                visited[u] = t
                for v, w in graph[u]:
                    queue.append((t + w, v))

        # Find the maximum value in the array signalReceivedAt. If any value in signalReceivedAt is still the large value we initialized the array with, then return -1 as that node is not reachable from k. Otherwise, return the maximum value in the array
        return -1 if len(visited) < n else max(visited.values())
        