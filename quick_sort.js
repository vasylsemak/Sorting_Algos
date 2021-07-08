const chalk = require('chalk')
const myArr = [4, 9, 3, 7, 0, 12, 2, 5]

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
  chalk.blue(quickSort(myArr))
)
