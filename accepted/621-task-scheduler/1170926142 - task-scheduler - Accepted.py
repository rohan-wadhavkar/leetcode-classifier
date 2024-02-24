class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:

        #creates hashmap with key -> count
        count = Counter(tasks)
        #max heap not available in python so negative minHeap
        maxHeap = [-cnt for cnt in count.values()]
        heapq.heapify(maxHeap)

        time = 0
        #double-ended queue
        q = deque() #pairs of [-cnt, idleTime]

        while maxHeap or q:
            time+=1

            if maxHeap:
                cnt = 1 + heapq.heappop(maxHeap)
                if cnt:
                    q.append([cnt, time+n])
            
            if q and q[0][1] == time:
                heapq.heappush(maxHeap, q.popleft()[0])

        return time
        