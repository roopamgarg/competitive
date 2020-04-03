
var solve = function(pool,newArr = [],result = []) {
    let newRes = result;
    if(pool.length === 0){
        // console.log(newArr)
        newRes.push(newArr);
        return
    }
    for(let i = 0 ; i < pool.length; i++){

        let temp = [...newArr,pool[i]]
        let tempArr = [...pool]
        tempArr.splice(i,1)
        solve(tempArr,temp,newRes)
    }
    return newRes
}
var permute = function(nums) {
    return solve(nums)
};

console.log(permute([1,2,3]))