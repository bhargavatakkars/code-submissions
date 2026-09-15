class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left=0;
        let right=s.length-1;
        while(left<right){
            while(left<right 
            && 
            !(
                (s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 57) ||
                (s.charCodeAt(left) >=  65 &&  s.charCodeAt(left) <= 90) ||
              (s.charCodeAt(left) >=  96 &&  s.charCodeAt(left) <= 122)
             )
            )
                {
                    left++;
                }
              while(left<right 
              && 
              !(
                (s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57) ||
                (s.charCodeAt(right) >=  65 &&  s.charCodeAt(right) <= 90) ||
                (s.charCodeAt(right) >=  96 &&  s.charCodeAt(right) <= 122)
               )
               )
                {
                    right--;
                }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }

        return true;;
    }
}
