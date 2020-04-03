/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

  

 var solve = function(candidates,target,currentArr = [],sum = 0, index = -1,newResult = [],object = {}) {
    let result = newResult;
    let obj = object;
    for(let i = index + 1; i < candidates.length; i++){
        if((sum + candidates[i]) <= target){
            solve(candidates,target,[...currentArr,candidates[i]],sum + candidates[i],i,result,obj)
        }
    }
     if(sum === target){
        const arrStr = currentArr.sort().toString()
        if(!obj[arrStr]){
        result.push(currentArr) 
        obj[arrStr] = true
        } 
    }
    return result
 }
var combinationSum = function(candidates, target) {

    return solve(candidates,target)

};

console.log(combinationSum([1],1))