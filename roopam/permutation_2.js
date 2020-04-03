
var solve = function(pool,newArr = [],result = [],newObj = {}) {
    let newRes = result;
    let obj = newObj;
    if(pool.length === 0){
        if(!obj[newArr.toString()])
        {
            newRes.push(newArr);
            obj[newArr.toString()] = true   
        }
        return
    }
    for(let i = 0 ; i < pool.length; i++){

        let temp = [...newArr,pool[i]]
        let tempArr = [...pool]
        tempArr.splice(i,1)
        solve(tempArr,temp,newRes,obj)
    }

    return newRes

}
var permute = function(nums) {
    return solve(nums)
};

console.log(permute([1,1,3]))