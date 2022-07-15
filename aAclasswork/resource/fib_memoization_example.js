// function fibs(n) {
//   if (n === 1 || n=== 2) return 1
//   return fibs(n-1) + fibs(n-2)
// }

//exponential solution, super slow

console.log(fibs(40))

function fibs (n, memo = {}) {
  if (n === 1 || n === 2) return 1
  if (n in memo) return memo[n]
  memo[n]=fibs(n-1,memo) + fibs(n-2,memo)
  return memo[n]
}