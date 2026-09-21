class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows=[];
        const cols=[];
        const sqs=[];
        for(let i=0;i<9;i++){
            rows.push(new Set());
            cols.push(new Set());
            sqs.push(new Set());
        }

        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                if(board[r][c]==='.') continue;
                if(rows[r].has(board[r][c]) || 
                    cols[c].has(board[r][c]) ||
                    sqs[Math.floor(r/3)*3+Math.floor(c/3)].has(board[r][c])
                ){
                    return false;
                }
                rows[r].add(board[r][c]);
                cols[c].add(board[r][c]);
                sqs[Math.floor(r/3)*3+Math.floor(c/3)].add(board[r][c]);
            }
        }
        return true;
    }
}
