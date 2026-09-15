class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let sta=[];
        let mp=new Map(
            [
                ['{','}'],
                ['[',']'],
                ['(',')']
            ]
            );
        for(let i=0;i<s.length;i++){
            if(s[i]==='{' || s[i]==='(' || s[i]==='['){
                sta.push(s[i]);
            }
            if(s[i]==='}' || s[i]===']' || s[i]===')'){
                if(sta.length===0) return false;
                if(s[i] !== mp.get(sta.pop())){
                    return false;
                }
            }
        }
        if(sta.length) return false;
        return true;
    }
}
