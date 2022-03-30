const nums = [2, 11, 15, 2, 8, 1]
const target = 10

function twoSum(nums, target) {
  let result = false
  for (let i = 0; i < nums.length; i++) {
    let secNums = nums
    for (let sec = i + 1; sec < secNums.length; sec++) {
      if (nums[i] + secNums[sec] === target) {
        console.log("Ass5->", i, sec);
        result = true
        return
      }
    }
  }
  if (result === false) {
    console.log("Ass5-> 沒有符合的餒");
  }
}