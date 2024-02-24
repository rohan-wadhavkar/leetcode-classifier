/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    
    
        let prev = null
        let curr = slow
        while (curr !== null){
            let next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        }

    while (head && prev) {
        if (head.val !== prev.val) return false;
        head = head.next;
        prev = prev.next;
    }
    return true
};