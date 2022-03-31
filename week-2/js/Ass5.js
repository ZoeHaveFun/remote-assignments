const nums = [2, 11, 15, 2, 8, 1]
const target = 26

function twoSum(nums, target) {
  let result = false
  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i]
    if (nums.includes(res)) {
      console.log("Ass5->", i, nums.indexOf(res));
      result = true
      return 
    }
  }
  if (result === false) {
    console.log("Ass5-> 沒有符合的餒");
  }
}