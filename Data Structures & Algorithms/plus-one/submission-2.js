class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
    digits = digits.toReversed();

        let ans = [];
        let carry = 1;

        for (let i = 0; i < digits.length; i++) {
            let sum = digits[i] + carry;
            ans.push(sum % 10);
            carry = Math.floor(sum / 10);
        }

        if (carry) {
            ans.push(carry);
        }

        return ans.toReversed();
    }
}
