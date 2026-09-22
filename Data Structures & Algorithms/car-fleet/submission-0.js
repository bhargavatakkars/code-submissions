class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) 
    {
        const carMap=new Map();
        for(let i=0;i<position.length;i++){
            carMap.set(position[i],speed[i]);
        }
        const sortedPositions = [...carMap.keys()].sort((a, b) => b - a);
        let stk=[];
        for(const p of sortedPositions){
            const s = carMap.get(p);
            stk.push((target-p)/s)
            if(stk.length>=2 && stk.at(-1) <= stk.at(-2) ){
                stk.pop();
            }
        }
        return stk.length;
    }
}
