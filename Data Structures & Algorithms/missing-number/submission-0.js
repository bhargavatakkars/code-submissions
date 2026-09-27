class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let exp = n * (n + 1) / 2;
        let actual = 0;
        for(let num of nums){
            actual+=num;
        }
        return exp-actual;
    }
}
