/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var isValid = function(num,board,i,j) {

    let corner_row = -1;
    let corner_col = -1;
    if(i < 9){
        corner_row = 8
    } 
    if(i < 6){
        corner_row = 5
    }
    if(i < 3){
        corner_row = 2
    } 
    if(j < 9){
        corner_col = 8
    } 
    if(j < 6){
        corner_col = 5
    }
    if(j < 3){
        corner_col = 2
    } 

    for(let k = 0; k < 9; k++){
        if(board[i][k] != "."){
            if(board[i][k] === num){
                return false
            }
        }
    }
    for(let k = 0; k < 9; k++){
        if(board[k][j] != "."){
            if(board[k][j] === num){
                return false
            }
        }
    }
    for(let n = corner_row - 2; n <= corner_row; n++ ){
        for(let m = corner_col - 2; m <= corner_col; m++ ){
            if(board[n][m] !== "."){
                if(board[n][m] === num){
                    return false
                }
            }
        }
    }
   

 
    return true
}


var solveSudoku = function(board) {


    let newBoard = board.map(row => row.slice())

    for(let i = 0;i < 9 ; i++){
        for(let j = 0; j < 9; j++){
            if(newBoard[i][j] === "."){
                let flag = false
                for(let k = 1; k <= 9;k++ ){
                    k = k.toString();
                
                    if(isValid(k,newBoard,i,j)){

                        flag = true
                        newBoard[i][j] = k
                        let res =  solveSudoku(newBoard)
                        // newBoard = res[0]
                        if(!res[1]){
                            flag = false
                        }else{
                            return res
                        }
                        
                    }
                }
                if(!flag){
               
                    return [board.slice(),false]
                }
            }
        }

    }
    return [newBoard.slice(),true]
};

const res = solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])[0]
console.log(res)