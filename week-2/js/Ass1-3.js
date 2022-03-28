window.onload = function() {
  const array1 = [1, 2, 4, 5]
  const array2 = [5, 2, 7, 1, 6]
  const args1 = {
    op:"+",
    n1:2,
    n2:3
  }
  class calculare2 {
    constructor (op, n1, n2) {
      this.op = op;
      this.n1 = n1;
      this.n2 = n2
    }
  }
  let args2 = new calculare2 ("-", 5, 7)

  max(array2)
  calculare(args2)

  function max(array) {
    let maxNum = array[0]
    for (let i = 0; i < array.length; i++) {
      if(array[i] >= maxNum) {
        maxNum = array[i]
      }
    }
    console.log("Ass1",maxNum);
  }

  function calculare(args) {
    let result;
    if (args.op === "+") {
      result = args.n1 + args.n2
    } else if (args.op === "-") {
      result = args.n1 - args.n2
    } else {
      result = "Not supported"
    }
    console.log("Ass2", result);
  }
}