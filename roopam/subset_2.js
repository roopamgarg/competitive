const solve = (arr,options,res=[[]],resObj = {}) => {
    const result =  res;
    const obj = resObj
    for(let i = 0; i < options.length ; i++){
        const option = options.slice()
        option.splice(i)
        const newArr = [...arr,options[i]]
        if(!obj[newArr.sort().toString()]){
            obj[newArr.sort().toString()] = true
            result.push(newArr);
        }
        solve(newArr,option,result,obj)
    }
    return result
}

console.log(solve([],[1,2,2]))