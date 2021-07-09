// const myArr = [9, 7, 5, 3, 1]
// const myArr = [99, 11, 77, 55, 22, 44]
const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]
// const myArr = Array(10000).fill(21)
/* ----------------------------------------------------------------- */


const chalk = require('chalk')

function quickSort(arr) {
  // base case for recursion
  if(arr.length <= 1) return arr

  // select first elem as pivot
  const [pivot, ...restArr] = arr
  const left = []
  const right = []

  // iterate through arr, push all smaller nums to leftArr; greater - to right
  restArr.forEach(el => el < pivot ? left.push(el) : right.push(el))

  // run f-n recursively on left and right arrays
  const leftSorted= quickSort(left)
  const rightSorted = quickSort(right)

  // return leftSortedArr + pivot + rightSortedArr
  return leftSorted.concat(pivot).concat(rightSorted)
}


console.log(
  chalk.yellow('sorted -> '),
  chalk.red(quickSort(myArr))
)



// /* ------        Perfomance F-N              --------------------- */
// function getPerfomance(func, arr) {
//   const start = Date.now()
//   const result = func(arr)
//   const end = Date.now()
//   let perfomance = (end - start) / 100
//   console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
//   return result
// }

// console.log(
//   chalk.yellow('sorted -> '),
//   chalk.red(getPerfomance(quickSort, myArr))
// )
