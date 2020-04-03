/**
 * @param {number} n
 * @return {string[][]}
 */

var isValid = function(n, i, j, board) {
  for (let p = 0; p < n; p++) {
    if (board[i][p] === "Q" && p != j) {
      return false;
    }
  }
  for (let p = 0; p < n; p++) {
    if (board[p][j] === "Q" && p != i) {
      return false;
    }
  }
  // for(let p = j - 1; p >=  0; p--){
  //      if(board[p][p] === "Q" ){
  //         return false
  //     }
  // }

  let start_i = i - j >= 0 ? i - j : 0;
  let start_j = j - i >= 0 ? j - i : 0;
  while (start_i < board.length && start_j < board.length) {
    if (board[start_i][start_j] === "Q" && start_i !== i && start_j !== j) {
      return false;
    }
    start_i++;
    start_j++;
  }
  // for(let p = start_i; p <  board.length; p++){
  //      if(board[p][p - start_i] === "Q" && (p !== j && p - start_i != i)){
  //         return false
  //     }
  // }
  start_i = i + j < board.length ? i + j : board.length - 1;
  start_j = i + j - start_i;
  while (start_i >= 0 && start_j < board.length) {
    if (board[start_i][start_j] === "Q" && start_j !== j && start_i != i) {
      return false;
    }
    start_i--;
    start_j++;
  }
  // for(let p = start_i; p >= 0; p--){
  //      if(board[p][start_i - p] === "Q" && (p !== j && start_i - p != i)){
  //         return false
  //     }
  // }
  return true;
};

const isValidNQueen = array => {
  for (let i = 0; i < array.length; i++) {
    let flag = false;
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === "Q") {
        flag = true;
      }
    }
    if (!flag) {
      return false;
    }
  }
  return true;
};

const solve = (array, i = 0, allArray = []) => {
  const allArrays = allArray;
  let arrayCopy = array.map(arr => arr.slice());
  if (i >= array.length) return false;

  for (let j = 0; j < array.length; j++) {
    if (isValid(array.length, i, j, array)) {
      arrayCopy = array.map(arr => arr.slice());
      arrayCopy[i][j] = "Q";
      let res = solve(arrayCopy, i + 1, allArrays);
      if (res[0]) {
        res[0] = res[0].map(arr => arr.join(""))  
        allArrays.push(res[0]);
      }
    }
  }

  if (isValidNQueen(arrayCopy)) {
    return [arrayCopy,allArrays];
  }
  return [false,allArrays];
  // allArrays.push(arrayCopy)
};

var solveNQueens = function(n) {
    if(n === 0)  return [].length
  if(n === 1)  return [["Q"]].length
  const array = new Array(n).fill(".").map(() => new Array(n).fill("."));
  return solve(array)[1].length;
};

console.log(solveNQueens(5));
