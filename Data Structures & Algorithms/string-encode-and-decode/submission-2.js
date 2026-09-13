class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans=""
        for(let i=0;i<strs.length;i++){
            ans=ans+strs[i].length+'#'+strs[i];
            
        }
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ans=[]
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=='#') j++;
            let leng=Number(str.slice(i,j))
            ans.push(str.slice(j+1,leng+j+1))
            i=leng+j+1;
        }
        return ans;
    }
}
