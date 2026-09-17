/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let rab=head;
        let tor=head;
        while(rab !== null && rab.next !== null){
            tor=tor.next;
            rab=(rab.next).next;
            if(tor==rab) return true;
        }
        return false;
    }
}
