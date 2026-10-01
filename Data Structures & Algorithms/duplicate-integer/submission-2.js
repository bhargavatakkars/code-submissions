class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length===0)  return false;
        let st=new Set();
        for(let num of nums){
            if(st.has(num)) return true;
            st.add(num);
        }
    return false;
    }
}
