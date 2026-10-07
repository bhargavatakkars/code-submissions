class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    doSquare(n){
        let output=0;
        while(n!==0){
            let digi=n%10;
            digi=digi*digi;
            output=output+digi;
            n=Math.floor(n/10);
        }
        return output;
    }
    isHappy(n) {
        let visit=new Set();
        while(!visit.has(n)){
            visit.add(n);
            n=this.doSquare(n);
            if(n==1) return true;
        }
        return false;
    }

}
