const array1 = [5, 1, 2, 4]
const array2 = [5, 2, 7, 1, 6]

function max(array) {
  let maxNum = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i]
    }
  }
  console.log("Ass1->", maxNum);
}