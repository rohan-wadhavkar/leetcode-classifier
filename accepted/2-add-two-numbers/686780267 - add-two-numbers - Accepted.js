/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode();
    let currNode = dummyNode;
    let p = l1;
    let q = l2;
    let carry = 0;
    
    while (l1 || l2) {
        let x = l1 != null ? l1.val : 0
        let y = l2 != null ? l2.val : 0
        
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        currNode.next = new ListNode(sum % 10);
        
        currNode = currNode.next;
        l1 = l1 == null ? null : l1.next;
        l2 = l2 == null ? null : l2.next;


    }
    if (carry > 0) {
        let carryNode = new ListNode(carry);
        currNode.next = carryNode;
    }
    return dummyNode.next;
};