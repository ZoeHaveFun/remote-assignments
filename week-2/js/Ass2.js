const args1 = {
  op:"+",
  n1:2,
  n2:3
}
class calculate2 {
  constructor (op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2
  }
}
let args2 = new calculate2 ("-", 5, 7)

function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2
  } else if (args.op === "-") {
    result = args.n1 - args.n2
  } else {
    result = "Not supported"
  }
  console.log("Ass2->", result);
}