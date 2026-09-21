class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0;
        let set=new Set(nums);
        let max=0;
        for(const num of set){
            if(set.has(num-1)){
                continue;
            }
            let len=1;
            while(set.has(num+len)){
                len++;
            }
            max=Math.max(max,len);
        }
        return max;
    }
}
