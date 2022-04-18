delayedResult(2, 10, 3000, function(result) {
  console.log("Ass1 ->", result);
})
delayedResult(2, 10, 3000, function(result) {
  window.alert(`Ass1 ->  ${result}`)
})

function delayedResult(n1, n2 , delayTime, callback) {
  const result = n1+n2;
  setTimeout(() => callback(result), delayTime)
}
