const permutation = (str,decisions) => {

    if(decisions.length === 0){
        console.log(str)
        return str;
    }
    for(let i = 0 ; i < decisions.length;i++){
        const newStr = str+decisions[i];
        const decisionCopy = decisions.slice();
        decisionCopy.splice(i,1)
        permutation(newStr,decisionCopy)
    }
}

permutation("","123".split(""))