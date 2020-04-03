/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max = 0;
  const len = nums.length;
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i === j) {
        dp[i][j] = nums[i];

        if(i == 2){
            dp[i][j] = dp[i][j] + dp[i-2][j-2]
        }
        else if(i > 2){
            dp[i][j] = ((dp[i][j] + dp[i-2][j-2]) > (dp[i][j] + dp[i-3][j-3])) ? (dp[i][j] + dp[i-2][j-2]) : (dp[i][j] + dp[i-3][j-3])

        }
      } else if (j === i + 1) {
        dp[i][j] = dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][i] + nums[j];
      }
      if (max < dp[i][j]) {
        max = dp[i][j];
      }
    }
  }
  return max;
};


console.log(rob([4,1,2,7,5,3,1]))
console.log(rob([2,1,1,2]))
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))


