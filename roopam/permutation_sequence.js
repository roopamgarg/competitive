const solve = (options,str,k,res = []) =>{
    const allRes = res
    if(allRes.length === k){
        return allRes
    }
    if(options.length === 0){
        allRes.push(str)
        return str;
    }
    for(let i = 0; i < options.length ; i++){
        let newStr = str + options[i];
        let newOptions = options.split("")
        newOptions.splice(i,1);
        newOptions = newOptions.join("")
        solve(newOptions,newStr,k,allRes)

    }
    return allRes[k-1]
}

console.log(solve("123","",3))