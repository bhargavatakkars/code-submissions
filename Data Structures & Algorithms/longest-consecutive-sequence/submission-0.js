class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0;
        nums.sort((a, b) => a - b); 
        console.log(nums)
        let cnt=1;
        let max=0;
        for(let i=1;i<nums.length;i++){
            if(nums[i]===nums[i-1]){
                continue;
                
            }
            else if(Math.abs(nums[i]-nums[i-1])===1){
                cnt++;
            }else{
                max=Math.max(max,cnt);
                cnt=1;
            }
        }
        max=Math.max(max,cnt);
        return max;
    }
}
