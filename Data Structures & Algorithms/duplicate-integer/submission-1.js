class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length===0) return false;
        let st=new Set(nums);
        if(nums.length===st.size) return false;
        return true;
    }
}
