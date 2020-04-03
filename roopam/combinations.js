const solve = (options,k,res = [],resArr = []) => {
    let finalArr = resArr

    if(res.length === k){
        finalArr.push(res)
        return finalArr
    }
    for(let i = 0; i < options.length ; i++){
        const newRes = [...res,options[i]]
 
        solve(options.slice(i+1),k,newRes,finalArr)
    }
    return finalArr
}

console.log(solve([1,2,3,4],2))