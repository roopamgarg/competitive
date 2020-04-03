var minDistance = function (word1, word2) {
    const word1len = word1.length;
    const word2len = word2.length;
    let dp = new Array(word1len + 1).fill(0).map(() => new Array(word2len + 1).fill(0));

    for (let i = 0; i <= word1len; i++) {
        for (let j = 0; j <= word2len; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 0;
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1] + 1;
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] + 1;
            } else {
                if (((dp[i - 1][j] - dp[i - 1][j - 1]) >= (dp[i][j - 1] - dp[i - 1][j - 1]) || (dp[i - 1][j] === dp[i - 1][j - 1])) && (word1[i - 1] !== word2[j - 1] && (dp[i][j - 1] >= dp[i - 1][j - 1]))) {

                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }

    return dp[word1len][word2len]
};

console.log(minDistance('eat', 'sea'))
console.log(minDistance('intention', 'execution'))
console.log(minDistance('horse', 'ros'))
console.log(minDistance("teacher", "detacher"))