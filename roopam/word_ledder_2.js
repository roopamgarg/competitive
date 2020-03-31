const isValid = (word1,word2,obj) => {
    if(obj[[word1,word2].toString()] !== undefined || obj[[word2,word1].toString()] !== undefined){
        return obj[[word1,word2].toString()]
    }
    let flag = false
    for(let i = 0; i < word1.length; i++){
        // console.log(word1[i],word2[i] ,word1[i] === word2[i] )
        if(word1[i] !== word2[i] && !flag ){
            flag = true
        }else if(word1[i] !== word2[i] && flag){
            flag = false
            return flag
        }
    }
    obj[[word1,word2].toString()] = flag
    obj[[word2,word1].toString()] = flag
    return flag;
}

const solveNew = (beginWord,endWord,obj,newArr = [],newObj = {},result = []) => {
    const wordLen = endWord.length;
    const charList = "abcdefghijklmnopqrstvuxyz";
    let lastRes = result.slice(-1)[0]
    let min = lastRes ? lastRes.length : Infinity
    if(newArr.length > min ){
        return result
    }
    if(beginWord === endWord){
        // console.log(beginWord,endWord,newArr)
        if(min === Infinity || min  > newArr.length){
            // console.log(newArr)
            result.splice(0)
            min = newArr.length
            result.push(newArr);
        }
        else if(min === newArr.length){
            result.push(newArr);
           // return result;
        }
        return result;

    }
   
    if(newArr.length === 0){
        // console.log("+++++++++++")
        newObj[beginWord] = beginWord
        newArr.push(beginWord)
    }
    for(let j = 0; j < wordLen; j++){
        for(let c = 0; c < charList.length; c++){
            let word = beginWord;
            if(word[j] !== charList[c]){
              
                let newWord =   word.slice(0,j) + charList[c] + word.slice(j+1)

                if(obj[newWord] !== undefined && !newObj[obj[newWord]]){
                    const arr = [...newArr,obj[newWord]];
                    const objIndexed = {...newObj}
                    objIndexed[obj[newWord]] = obj[newWord] 
                    solveNew(obj[newWord],endWord,obj,arr,objIndexed,result)

                }
               
            }

        }
    }
    return result
}


var findLadders = function(beginWord, endWord, wordList) {
    const obj = {};
    for(let i = 0 ; i < wordList.length; i++ ){
        obj[wordList[i]] = wordList[i]
    }
    return solveNew(beginWord,endWord,obj)
};

console.log(findLadders(
    "qa",
    "sq",
    ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))

console.log(findLadders("cet",
"ism",
["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]))
