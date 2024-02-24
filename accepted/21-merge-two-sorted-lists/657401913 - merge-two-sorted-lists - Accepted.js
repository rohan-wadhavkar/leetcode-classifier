/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(-1);
    let itr = head;
    
    while (list1 && list2) {
            if (list1.val<=list2.val) {
                itr.next = list1;
                list1=list1.next; 
            }
            else {
                itr.next = list2;
                list2=list2.next; 

            }
            itr=itr.next;

    }
    console.log(list1 || list2);
    itr.next = list1 || list2;
    
    return head.next;

};