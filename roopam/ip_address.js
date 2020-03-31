
const solve = (str,options,level = 1,result = []) => {
    result = result
    const limit = options.length > 3 ? 3 : options.length - 1;
    // if(options.slice(0,2) === "00"){
    //     return result
    // }
    for(let i = 0; i < limit; i++){
        let newStr = options.slice(0,i + 1);
        const newOptions = options.slice(i+1);
        
        if(parseInt(newStr) <= 255 && !(newStr.length > 1 && newStr[0] === "0")){
            newStr = str + "." + (newStr) 
            if(level === 3 && parseInt(newOptions) <= 255 && !(newOptions.length > 1 && newOptions[0] === "0")){
                newStr = newStr + "." + (newOptions) 
                result.push(newStr.slice(1))
             
            }
            solve(newStr,newOptions,level + 1,result)
        }else{
            return result
        }
    }
    return result
}

console.log(solve("","010010")) 