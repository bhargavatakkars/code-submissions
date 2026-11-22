class Solution {
    public int rob(int[] nums) {
        int res1=0,res2=0;
        for(int i=0;i<nums.length;i++){
            int ans=0;
            ans=Math.max(res1,res2+nums[i]);
            res2=res1;
            res1=ans;

        }
        return res1;
    }
}
