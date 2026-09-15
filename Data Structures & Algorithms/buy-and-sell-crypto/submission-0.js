class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let pro=0;
        let lowest=prices[0];
        for(let i=0;i<prices.length;i++){
            if(prices[i]<lowest){
                lowest=prices[i];
            }
            if(pro < prices[i]-lowest){
                pro=prices[i]-lowest;
            }
        }
        return pro;
    }
}
