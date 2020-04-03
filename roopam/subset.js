const solve = (arr,options,res=[[]]) => {
    const result =  res;
    for(let i = 0; i < options.length ; i++){
        const option = options.slice()
        option.splice(i)
        const newArr = [...arr,options[i]]
        result.push(newArr);
        solve(newArr,option,result)
    }
    return result
}

console.log(solve([],[1,2,3]))