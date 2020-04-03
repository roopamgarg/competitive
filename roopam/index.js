/*
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 *
 */

const createObj = (wordsArr) => {
    let newObj = {};
    for(let i = 0; i < wordsArr.length; i++ ){
        newObj[wordsArr[i]] = (newObj[wordsArr[i]]) ? newObj[wordsArr[i]] + 1 : 1; 
    }
    return newObj;
}

const isWordFound = (word,wordsObj) => {
    if(wordsObj[word]){
        wordsObj[word]--;
        if(wordsObj[word] === 0){
            delete wordsObj[word];
        }
        return true;
    }
    return false;
}

var findSubstring = function(s, words) {
    let permanentObj = createObj(words);
    let wordsObj = {...permanentObj};
    let wordLen = words[0].length;
    let isIntialized = false;
    let initial = -1;
    let currentArray = [];
    let result = [];
    for(let i = 0 ; i < s.length; i++ ){
        console.log(i)
        let word = s.slice(i,i+wordLen);
          
        if(isWordFound(word,wordsObj)){
            if(!isIntialized){
                initial = i;
                isIntialized = true;
            }
            currentArray.push(word);
            i+=(wordLen - 1)
            if(currentArray.length === words.length){
                result.push(initial);
                isIntialized = false;
                currentArray = []
                wordsObj = {...permanentObj};
                i = initial;
                
            }
        }else{
        

            wordsObj = {...permanentObj};
            if(isIntialized){
                i = initial + 1;
            }
            currentArray = [];
            isIntialized = false;
            word = s.slice(i,i+wordLen);
        
            
            if(isWordFound(word,wordsObj)){
                if(!isIntialized){
                    initial = i;
                    isIntialized = true;
                }
            currentArray.push(word);
            i+=(wordLen - 1)
            if(currentArray.length === words.length){
                result.push(initial);
                isIntialized = false;
                currentArray = []
                wordsObj = permanentObj;
                 i = initial;
            }
        }
    }
    }
    
    return result;
};

const res = findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake",
["fooo","barr","wing","ding","wing"])

console.log(res)