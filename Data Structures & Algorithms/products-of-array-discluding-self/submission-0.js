class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=1,postfix=1;
        let ans=[];
        for(let i =0;i<nums.length;i++){
            ans[i]=prefix;
            prefix=prefix*nums[i];
        }
        for(let j=nums.length-1;j>=0;j--){
            ans[j]=ans[j]*postfix;
            postfix=nums[j]*postfix;
        }
        return ans;
    }
}
