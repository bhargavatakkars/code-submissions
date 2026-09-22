class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans=new Array(temperatures.length).fill(0);
        let st=[];
        for(let i =0;i<temperatures.length;i++){
            while(st.length!==0 && temperatures[i] > temperatures[st.at(-1)]){
                let index=st.at(-1);
                st.pop();
                ans[index]=i-index;
            }
            st.push(i);
        }
        return ans;
    }
}
