## Array
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[566](https://leetcode.com/problems/reshape-the-matrix/) | Reshape the Matrix | Easy | Have a counter cnt, and the row index will be cnt//c and the column index will be cnt%c. | [PySolution](./leetcode_python_solutions/566.py) |  | 
[645](https://leetcode.com/problems/set-mismatch/) | Set Mismatch | Easy | Hash table | [PySolution](./leetcode_python_solutions/645.py) |  | 
[697](https://leetcode.com/problems/degree-of-an-array/) | Degree of an Array | Easy/Medium | Hash table. | [PySolution](./leetcode_python_solutions/697.py) |  | 
[422](https://leetcode.com/problems/find-all-duplicates-in-an-array/) | Find All Duplicates in an Array | Medium | Leverage the input list, and use negation. |  |  | 
[565](https://leetcode.com/problems/array-nesting/) | Array Nesting | Medium | Use input as visited array. | [PySolution](./leetcode_python_solutions/565.py) |  | 
[769](https://leetcode.com/problems/max-chunks-to-make-sorted/) | Max Chunks To Make Sorted | Medium | Iterate through array. If current max is smaller than or equal to current index, the the number of chunks increases by 1. | [PySolution](./leetcode_python_solutions/769.py) |  | 
[462](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/) | Minimum Moves to Equal Array Elements II | Medium | Quick select algorithm. | [PySolution](./leetcode_python_solutions/462.py) | 215 | 
[287](https://leetcode.com/problems/find-the-duplicate-number/) | Find the Duplicate Number | Medium | Slow and fast pointers + cycle detection. | [PySolution](./leetcode_python_solutions/287.py) |  |

## Backtracking
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Letter Combinations of a Phone Number | Medium | Combinations | [PySolution](./leetcode_python_solutions/17.py) | 77, 39, 40, 216 | 
[46](https://leetcode.com/problems/permutations/) | Permutations | Medium | Permutations | [PySolution](./leetcode_python_solutions/46.py) | 47, 784, 996 | 
[78](https://leetcode.com/problems/subsets/) | Subsets | Medium | Subsets | [PySolution](./leetcode_python_solutions/78.py) | 90 | 
[79](https://leetcode.com/problems/word-search/) | Word Search | Medium | DFS for problem 79 and DFS + Trie for Problem 212. | [PySolution](./leetcode_python_solutions/79.py) | 212 | 
[22](https://leetcode.com/problems/generate-parentheses/) | Generate Parentheses | Medium | Add ( whenever the number of ( is smaller than n, and add ) whenever the number of ) is smaller than the number of open parentheses. | [PySolution](./leetcode_python_solutions/22.py) | 301 | 
[131](https://leetcode.com/problems/palindrome-partitioning/) | Palindrome Partitioning | Medium | Partition | [PySolution](./leetcode_python_solutions/131.py) | 93, 698, 842, 282 | 
[37](https://leetcode.com/problems/sudoku-solver/) | Sudoku Solver | Hard |  | [PySolution](./leetcode_python_solutions/37.py) | 51 | 

## Binary Search
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[69](https://leetcode.com/problems/sqrtx/) | Sqrt(x) | Easy |  | [PySolution](./leetcode_python_solutions/69.py) |  | 
[35](https://leetcode.com/problems/search-insert-position/) | Search Insert Position | Easy | bisect.bisect_left() | [PySolution](./leetcode_python_solutions/35.py) | 704 | 
[278](https://leetcode.com/problems/first-bad-version/) | First Bad Version | Easy |  | [PySolution](./leetcode_python_solutions/278.py) | 981 | 
[744](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | Find Smallest Letter Greater Than Target | Easy | Be careful about the 'wrap around' constraint and duplicates. Use bisect.bisect() function. | [PySolution](./leetcode_python_solutions/744.py) |  | 
[875](https://leetcode.com/problems/koko-eating-bananas/) | Koko Eating Bananas | Medium | Search by checking validity. | [PySolution](./leetcode_python_solutions/875.py) | 1011 | 
[74](https://leetcode.com/problems/search-a-2d-matrix/) | Search a 2D Matrix | Medium | Search row and then search column or treat 2D as 1D array. | [PySolution](./leetcode_python_solutions/74.py) |  | 
[34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | Find First and Last Position of Element in Sorted Array | Medium | Use both bisect.bisect_left() and bisect.bisect(). | [PySolution](./leetcode_python_solutions/34.py) |  | 
[33](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Search in Rotated Sorted Array | Medium | left +=1 and right -= 1 if nums[left]==nums[mid]==nums[right]. | [PySolution](./leetcode_python_solutions/33.py) | 81, 153, 154 | 
[540](https://leetcode.com/problems/single-element-in-a-sorted-array/) | Single Element in a Sorted Array | Medium | This problem is tricky. If mid is even and nums[mid] == nums[mid+1], then left = mid+2. If mid is odd, then mid -= 1 and check condition. | [PySolution](./leetcode_python_solutions/540.py) |  | 
[378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | Kth Smallest Element in a Sorted Matrix | Medium | Nested binary searches. Outer one search for the target, and inner one is used to calculate how many elements are less than or equal to the target candidate in each row. Another idea is to use min heap. | [PySolution](./leetcode_python_solutions/378.py) |  | 
[719](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | Find K-th Smallest Pair Distance | Hard | Sort array first, and then search by checking validity. | [PySolution](./leetcode_python_solutions/719.py) |  | 
[4](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Median of Two Sorted Arrays | Hard | Binary search using the shorter list based on condition nums_short[mid1] <? nums_long[mid2-1]. | [PySolution](./leetcode_python_solutions/4.py) |  | 

## Binary Search Tree
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[700](https://leetcode.com/problems/search-in-a-binary-search-tree/) | Search in a Binary Search Tree | Easy | Recursion and search in half of the subtree each time. | [PySolution](./leetcode_python_solutions/700.py) | 701 | 
[669](https://leetcode.com/problems/trim-a-binary-search-tree/) | Trim a Binary Search Tree | Easy | Recursion, and check current node value with lower and upper bounds | [PySolution](./leetcode_python_solutions/669.py) |  | 
[653](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/) | Two Sum IV - Input is a BST | Easy | Use inorder to get a sorted array, and use two pointers. | [PySolution](./leetcode_python_solutions/653.py) |  | 
[235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Lowest Common Ancestor of a Binary Search Tree | Easy | Recursion, and check current node value with the values of the two given nodes | [PySolution](./leetcode_python_solutions/235.py) | 236 | 
[98](https://leetcode.com/problems/validate-binary-search-tree/) | Validate Binary Search Tree | Medium | Check value with lower and upper bounds for each node. Another way is to leverage inorder traversal. | [PySolution](./leetcode_python_solutions/98.py) | 530 | 
[230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Kth Smallest Element in a BST | Medium | Inorder traversal | [PySolution](./leetcode_python_solutions/230.py) |  | 
[108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Convert Sorted Array to Binary Search Tree | Easy | Divide array by half and use recursion. | [PySolution](./leetcode_python_solutions/108.py) | 109 | 
[501](https://leetcode.com/problems/find-mode-in-binary-search-tree/) | Find Mode in Binary Search Tree | Easy | Be careful to the BST definition, and use inorder traversal | [PySolution](./leetcode_python_solutions/501.py) |  | 
[450](https://leetcode.com/problems/delete-node-in-a-bst/) | Delete Node in a BST | Medium | The deleted node could have no child, 1 child, and 2 children (which is the most tricky part) | [PySolution](./leetcode_python_solutions/450.py) |  | 
[1008](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) | Construct Binary Search Tree from Preorder Traversal | Medium | Use recursion and for each node, update the lower and upper values for its children. | [PySolution](./leetcode_python_solutions/1008.py) |  | 
[99](https://leetcode.com/problems/recover-binary-search-tree/) | Recover Binary Search Tree | Hard | Inorder traversal to find the two nodes and swap them | [PySolution](./leetcode_python_solutions/99.py) |  | 

## Bit Manipulation
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[136](https://leetcode.com/problems/single-number/) | Single Number | Easy | XOR | [PySolution](./leetcode_python_solutions/136.py) |  | 
[318](https://leetcode.com/problems/maximum-product-of-word-lengths/) | Maximum Product of Word Lengths | Medium | Use a mask/filter to indicate which letter has appeared for each word. | [PySolution](./leetcode_python_solutions/318.py) | 268, 260 | 
[338](https://leetcode.com/problems/counting-bits/) | Counting Bits | Medium | DP with dp[i] = dp[i&(i-1)] + 1. | [PySolution](./leetcode_python_solutions/338.py) |  | 

## Divide and Conquer
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[912](https://leetcode.com/problems/sort-an-array/) | Sort an Array | Medium | Merge/quick sort, quick select | [PySolution](./leetcode_python_solutions/912.py) | 215, 148 | 
[241](https://leetcode.com/problems/different-ways-to-add-parentheses/) | Different Ways to Add Parentheses | Medium | Divide the string into two parts when encountering an operator, and recurse on each part and combine results. | [PySolution](./leetcode_python_solutions/241.py) |  | 
[95](https://leetcode.com/problems/unique-binary-search-trees-ii/) | Unique Binary Search Trees II | Medium | Iterate through the possible values ("array"), and use the current as root and pivot, and divide the "array" into two parts, and find all possible solutions using the recursion results obtained by using the aforementioned two parts. | [PySolution](./leetcode_python_solutions/95.py) |  | 
[315](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | Count of Smaller Numbers After Self | Hard | Merge sort. The key is gradually updating the answer in the merge step. | [PySolution](./leetcode_python_solutions/315.py) |  | 

## Dynamic Programming
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[70](https://leetcode.com/problems/climbing-stairs/) | Climbing Stairs | Easy | Simple DP | [PySolution](./leetcode_python_solutions/70.py) | 746, 1137 | 
[198](https://leetcode.com/problems/house-robber/) | House Robber | Easy | For Problem 213, try twice, one without the first house and one without the last house. Then find the maximum of them. One way to solve Problem 740 is to convert it into a house robber problem. | [PySolution](./leetcode_python_solutions/198.py) | 213, 337, 740 | 
[1218](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/) | Longest Arithmetic Subsequence of Given Difference | Medium | For Problem 1218, use Hash table + DP | [PySolution](./leetcode_python_solutions/1218.py) | 413, 300, 646, 1143 | 
[416](https://leetcode.com/problems/partition-equal-subset-sum/) | Partition Equal Subset Sum | Medium | Knapsack problem. | [PySolution](./leetcode_python_solutions/416.py) | 494, 474, 322, 518, 139, 377 | 
[62](https://leetcode.com/problems/unique-paths/) | Unique Paths | Medium | DP in 2-dimensional space. Deal with the boundaries first for Problems 62-64. | [PySolution](./leetcode_python_solutions/62.py) | 63, 64, 120, 931 | 
[85](https://leetcode.com/problems/maximal-rectangle/) | Maximal Rectangle | Hard/Medium | Leverage the solution to Problem 84 using stack for Problems 85 and 221. | [PySolution](./leetcode_python_solutions/85.py) | 221, 1277 | 
[309](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | Best Time to Buy and Sell Stock with Cooldown | Medium/Hard | Multi-state (rest, sold, hold) DP | [PySolution](./leetcode_python_solutions/309.py) | 801 | 

## Graph
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[997](https://leetcode.com/problems/find-the-town-judge/) | Find the Town Judge | Easy | Use both in-degrees and out-degrees. | [PySolution](./leetcode_python_solutions/997.py) |  | 
[133](https://leetcode.com/problems/clone-graph/) | Clone Graph | Medium | Use hash table and DFS. The hash table also serves as the visited. | [PySolution](./leetcode_python_solutions/133.py) | 138 | 
[200](https://leetcode.com/problems/number-of-islands/) | Number of Islands | Medium | It is a connected components problem, use DFS. Given grid might be able to be used as visited. | [PySolution](./leetcode_python_solutions/200.py) | 547, 695, 733, 841, 827, 1202, 130, 417 | 
[1162](https://leetcode.com/problems/as-far-from-land-as-possible/) | As Far from Land as Possible | Medium | It is a shortest/longest path problem, use BFS. | [PySolution](./leetcode_python_solutions/1162.py) | 433, 863, 1129, 1091, 279, 127, 399, 542, 934 | 
[785](https://leetcode.com/problems/is-graph-bipartite/) | Is Graph Bipartite? | Medium | Graph coloring | [PySolution](./leetcode_python_solutions/785.py) | 886, 1042 | 

## Greedy Algorithm
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[455](https://leetcode.com/problems/assign-cookies/) | Assign Cookies | Easy | Have kids and you will know :joy: | [PySolution](./leetcode_python_solutions/455.py) |  | 
[605](https://leetcode.com/problems/can-place-flowers/) | Can Place Flowers | Easy | Pad each side of flowerbed by 0, and iteratively check if we can place flower by flowerbed[i-1] == flowerbed[i] == flowerbed[i+1] == 0. | [PySolution](./leetcode_python_solutions/605.py) |  | 
[121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Best Time to Buy and Sell Stock | Easy | Keep track of the min price. You might have solved the problem without realizing it is a greedy algorithm problem. Greedy algorithm allows you to follow your instinct. | [PySolution](./leetcode_python_solutions/121.py) | 122 | 
[53](https://leetcode.com/problems/maximum-subarray/) | Maximum Subarray | Easy/Medium | Repeatedly check current sum cur_sum = max(cur_sum + num, num). There is a blur boundary between greedy algorithm and DP for this problem. | [PySolution](./leetcode_python_solutions/53.py) | 152 | 
[435](https://leetcode.com/problems/non-overlapping-intervals/) | Non-overlapping Intervals | Medium | Sort the intervals by the end point of each interval. | [PySolution](./leetcode_python_solutions/435.py) | 452 | 
[763](https://leetcode.com/problems/partition-labels/) | Partition Labels | Medium | Use a hash table to keep track of the last time (largest index) a letter appeared. | [PySolution](./leetcode_python_solutions/763.py) |  | 
[406](https://leetcode.com/problems/queue-reconstruction-by-height/) | Queue Reconstruction by Height | Medium | Sort the list by height h in descending order and number of people k in ascending order. Construct a queue queue by iteratively queue.insert(k, h) for each pair in the sorted list. | [PySolution](./leetcode_python_solutions/406.py) |  | 

## Hash table and set
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[169](https://leetcode.com/problems/majority-element/) | Majority Element | Easy | Hash table | [PySolution](./leetcode_python_solutions/169.py) |  | 
[1](https://leetcode.com/problems/two-sum/) | Two Sum | Easy | Iterate through the array and check if target - nums[i] is in the hash map. | [PySolution](./leetcode_python_solutions/1.py) |  | 
[217](https://leetcode.com/problems/contains-duplicate/) | Contains Duplicate | Easy | Hash set | [PySolution](./leetcode_python_solutions/217.py) |  | 
[594](https://leetcode.com/problems/longest-harmonious-subsequence/) | Longest Harmonious Subsequence | Easy | Iterate the array and do max(ans, count[num] + count[num+1]). | [PySolution](./leetcode_python_solutions/594.py) |  | 
[128](https://leetcode.com/problems/longest-consecutive-sequence/) | Longest Consecutive Sequence | Hard/Medium | Convert array to hash set. Iterate the array and check if the next element is in the set. | [PySolution](./leetcode_python_solutions/128.py) |  | 
[560](https://leetcode.com/problems/subarray-sum-equals-k/) | Subarray Sum Equals K | Medium | Use cumulative sum and the two sum problem (1) idea. | [PySolution](./leetcode_python_solutions/560.py) |  | 

## Linked List
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[206](https://leetcode.com/problems/reverse-linked-list/) | Reverse Linked List | Easy | Iteratively is straightforward but recursively is a little bit tricky. | [PySolution](./leetcode_python_solutions/206.py) |  | 
[21](https://leetcode.com/problems/merge-two-sorted-lists/) | Merge Two Sorted Lists | Easy | Recursion make solution much cleaner for Problem 21. Use heap for Problem 23. | [PySolution](./leetcode_python_solutions/21.py) | 23 | 
[160](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Intersection of Two Linked Lists | Easy | Connect the end of a list to the head of the other list. | [PySolution](./leetcode_python_solutions/160.py) |  | 
[19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Remove Nth Node From End of List | Medium | Use two pointers and let one move N times first. | [PySolution](./leetcode_python_solutions/19.py) |  | 
[24](https://leetcode.com/problems/swap-nodes-in-pairs/) | Swap Nodes in Pairs | Medium | Use recursion and divide & conquer. | [PySolution](./leetcode_python_solutions/24.py) |  | 
[2](https://leetcode.com/problems/add-two-numbers/) | Add Two Numbers | Medium | Iterate, add number and make new linked list. | [PySolution](./leetcode_python_solutions/2.py) | 445 | 
[725](https://leetcode.com/problems/split-linked-list-in-parts/) | Split Linked List in Parts | Medium | Find length n, and use n//k and n%k to determine the size for each part. | [PySolution](./leetcode_python_solutions/725.py) |  | 
[328](https://leetcode.com/problems/odd-even-linked-list/) | Odd Even Linked List | Medium | Use odd and even pointers, and a node to save the head of the even list. | [PySolution](./leetcode_python_solutions/328.py) |  | 
[148](https://leetcode.com/problems/sort-list/) | Sort List | Medium | Slow and fast pointers + merge sort | [PySolution](./leetcode_python_solutions/148.py) |  | 
[234](https://leetcode.com/problems/palindrome-linked-list/) | Palindrome Linked List | Medium | Use slow and fast pointers to cut it into halves. Reverse the second half and compare with the first half. | [PySolution](./leetcode_python_solutions/234.py) |  | 

## Math
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[204](https://leetcode.com/problems/count-primes/) | Count Primes | Easy | Sieve of Eratosthenes | [PySolution](./leetcode_python_solutions/204.py) |  | 
[504](https://leetcode.com/problems/base-7/) | Base 7 | Easy | Repeatedly use digit = n%base and n = n//base where integer base is the target base. | [PySolution](./leetcode_python_solutions/504.py) | 405, 168 | 
[67](https://leetcode.com/problems/add-binary/) | Add Binary | Easy |  | [PySolution](./leetcode_python_solutions/67.py) | 415 | 
[367](https://leetcode.com/problems/valid-perfect-square/) | Valid Perfect Square | Easy | Binary search with time complexity O(log(n)) or 1+3+...+(2n-1) = n*n with time complexity O(sqrt(n)). | [PySolution](./leetcode_python_solutions/367.py) |  | 
[326](https://leetcode.com/problems/power-of-three/) | Power of Three | Easy |  | [PySolution](./leetcode_python_solutions/326.py) | 342 | 
[628](https://leetcode.com/problems/maximum-product-of-three-numbers/) | Maximum Product of Three Numbers | easy | The max product is max(max1*max2*max3, max1*min1*min2)). | [PySolution](./leetcode_python_solutions/628.py) |  | 
[238](https://leetcode.com/problems/product-of-array-except-self/) | Product of Array Except Self | Medium | Leverage the output array to have O(1) space and do cummulative product from left to right and right to left. | [PySolution](./leetcode_python_solutions/238.py) |  | 

## Stack and Queue
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[155](https://leetcode.com/problems/min-stack/) | Min Stack | Easy | Push a tuple (x, minimum) into stack. | [PySolution](./leetcode_python_solutions/155.py) |  | 
[232](https://leetcode.com/problems/implement-queue-using-stacks/) | Implement Queue using Stacks | Easy | Be careful about the amortized time complexity of each operation. Use two stacks. | [PySolution](./leetcode_python_solutions/232.py) |  | 
[1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | Remove All Adjacent Duplicates In String | Easy | Use stack. | [PySolution](./leetcode_python_solutions/1047.py) | 1209 | 
[20](https://leetcode.com/problems/valid-parentheses/) | Valid Parentheses | Easy | Be careful about the type of parentheses. Maybe use a dict to simplify code. | [PySolution](./leetcode_python_solutions/20.py) | 921, 1249 | 
[739](https://leetcode.com/problems/daily-temperatures/) | Daily Temperatures | Medium | Iterate through array, and pop util current temp smaller than or equal to temp at the top of the stack. Otherwise, push. | [PySolution](./leetcode_python_solutions/739.py) | 402 | 
[503](https://leetcode.com/problems/next-greater-element-ii/) | Next Greater Element II | Medium | Iterate trough the concatenated array, e.g., given a list nums, iterate through nums+nums. | [PySolution](./leetcode_python_solutions/503.py) | 496 | 
[581](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) | Shortest Unsorted Continuous Subarray | Medium | Use monotone stack. | [PySolution](./leetcode_python_solutions/581.py) |  | 
[239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Hard | Use monotone queue. | [PySolution](./leetcode_python_solutions/239.py) | 1438 | 

## String
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[242](https://leetcode.com/problems/valid-anagram/) | Valid Anagram | Easy | Hash table | [PySolution](./leetcode_python_solutions/242.py) | 438, 205 | 
[409](https://leetcode.com/problems/longest-palindrome/) | Longest Palindrome | Easy | Hash table | [PySolution](./leetcode_python_solutions/409.py) |  | 
[9](https://leetcode.com/problems/palindrome-number/) | Palindrome Number | Easy | Convert to string or reverse a number. | [PySolution](./leetcode_python_solutions/9.py) |  | 
[3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Longest Substring Without Repeating Characters | Medium | Hash set | [PySolution](./leetcode_python_solutions/3.py) |  | 
[647](https://leetcode.com/problems/palindromic-substrings/) | Palindromic Substrings | Medium | Expand string centered at each letter | [PySolution](./leetcode_python_solutions/647.py) | 5 | 
[796](https://leetcode.com/problems/rotate-string/) | Rotate String | Easy | A naive solution is check if B in A+A. | [PySolution](./leetcode_python_solutions/796.py) |  | 
[151](https://leetcode.com/problems/reverse-words-in-a-string/) | Reverse Words in a String | Medium | Reverse each word and reverse the string. | [PySolution](./leetcode_python_solutions/151.py) |  | 

## Topological Sort
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[207](https://leetcode.com/problems/course-schedule/) | Course Schedule | Medium | Build graph and in-degree/out-degree list, then do topological sort. | [PySolution](./leetcode_python_solutions/207.py) | 210, 802 | 

## Tree
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[104](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Maximum Depth of Binary Tree | Easy | Simple recursion. | [PySolution](./leetcode_python_solutions/104.py) | 110, 111, 112, 226, 617, 101, 404, 814, 1325 | 
[508](https://leetcode.com/problems/most-frequent-subtree-sum/) | Most Frequent Subtree Sum | Medium | Use a hash table to find all path sums, and then find answer from the hash table. | [PySolution](./leetcode_python_solutions/508.py) |  | 
[437](https://leetcode.com/problems/path-sum-iii/) | Path Sum III | Easy/Medium | For Problem 437, use hash_table + DFS to achieve linear time complexity, similar to two sum problem. Check out similar problem 560. | [PySolution](./leetcode_python_solutions/437.py) | 113, 129, 257 | 
[124](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Binary Tree Maximum Path Sum | Hard/Medium | Find left sum and right sum, and use both of them to calculate the sum with the current node as the root, and return only one of them. | [PySolution](./leetcode_python_solutions/124.py) | 543 | 
[572](https://leetcode.com/problems/subtree-of-another-tree/) | Subtree of Another Tree | Easy/Medium | Recursively check if t is the same tree with a tree rooted at the current node, or if t is a subtree rooted at current node's left or right child. Problem 687 can have linear time complexity by calculating the longest path by using left and right paths and only returning the max of left and right paths. | [PySolution](./leetcode_python_solutions/572.py) | 687 | 
[102](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Binary Tree Level Order Traversal | Medium | Level-order traversal. Use BFS or defaultdict[list] to add node into corresponding level. | [PySolution](./leetcode_python_solutions/102.py) | 637, 513, 429, 1302 | 
[144](https://leetcode.com/problems/binary-tree-preorder-traversal/) | Binary Tree Preorder Traversal | Medium | Recursively is trivial, but iteratively is very complicated. IMO, iteratively in-order traversal is the hardest. | [PySolution](./leetcode_python_solutions/144.py) | 589, 145, 590, 94 | 
[297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Serialize and Deserialize Binary Tree | Hard | In the binary tree problem, we need to have "null" indicator to represent null node in the serialized string, while BST does not. BST problem uses pre-order traversal to serialize and deserialize by recursively building trees by checking lower and upper bounds for subtrees. | [PySolution](./leetcode_python_solutions/297.py) | 449, 106, 105 | 
[968](https://leetcode.com/problems/binary-tree-cameras/) | Binary Tree Cameras | Hard | Bottom up. DFS + greedy. | [PySolution](./leetcode_python_solutions/968.py) | 979 | 

## Trie
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[208](https://leetcode.com/problems/implement-trie-prefix-tree/) | Implement Trie (Prefix Tree) | Medium | Defining a TrieNode class whose children is a defaultdict(TrieNode) type variable will facilitate coding. | [PySolution](./leetcode_python_solutions/208.py) | 677, 648, 676, 720, 211 | 

## Two Pointers
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Two Sum II - Input array is sorted | Easy | Head and tail pointers move toward the middle. | [PySolution](./leetcode_python_solutions/167.py) | 15, 16 | 
[633](https://leetcode.com/problems/sum-of-square-numbers/) | Sum of Square Numbers | Easy | Head and tail (square root) pointers move toward the middle. | [PySolution](./leetcode_python_solutions/633.py) |  | 
[345](https://leetcode.com/problems/reverse-vowels-of-a-string/) | Reverse Vowels of a String | Easy | Head and tail pointers move toward the middle. | [PySolution](./leetcode_python_solutions/345.py) |  | 
[917](https://leetcode.com/problems/reverse-only-letters/) | Reverse Only Letters | Easy | Head and tail pointers move toward the middle. | [PySolution](./leetcode_python_solutions/917.py) |  | 
[125](https://leetcode.com/problems/valid-palindrome/) | Valid Palindrome | Easy | Head and tail pointers move toward the middle. | [PySolution](./leetcode_python_solutions/125.py) | 680 | 
[88](https://leetcode.com/problems/merge-sorted-array/) | Merge Sorted Array | Easy | Two pointers initialized at the ends. | [PySolution](./leetcode_python_solutions/88.py) |  | 
[977](https://leetcode.com/problems/squares-of-a-sorted-array/) | Squares of a Sorted Array | Easy | Head and tail pointer moves based on certain condition. | [PySolution](./leetcode_python_solutions/977.py) |  | 
[925](https://leetcode.com/problems/long-pressed-name/) | Long Pressed Name | Easy | Two pointers, one moves based on certain condition. | [PySolution](./leetcode_python_solutions/925.py) | 56, 986 | 
[141](https://leetcode.com/problems/linked-list-cycle/) | Linked List Cycle | Medium | Slow and fast pointers | [PySolution](./leetcode_python_solutions/141.py) | 142 | 
[524](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/) | Longest Word in Dictionary through Deleting | Medium | Use two pointers to check if one string is a substring of another. | [PySolution](./leetcode_python_solutions/524.py) |  | 
[11](https://leetcode.com/problems/container-with-most-water/) | Container With Most Water | Medium | Head and tail pointers move toward the middle. | [PySolution](./leetcode_python_solutions/11.py) | 42 | 

## Union Find
| ID | Problem Name | Difficulty | Main Idea | Solution | Similar problems |
|----|--------------|------------|-----------|----------|-----------------|
[684](https://leetcode.com/problems/redundant-connection/) | Redundant Connection | Medium |  | [PySolution](./leetcode_python_solutions/684.py) | 1319, 990, 721, 685 | 


