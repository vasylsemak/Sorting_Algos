const chalk = require('chalk')
// const myArr = [9, 7, 5, 3, 1]
// const myArr = [99, 11, 77, 55, 22, 44]
// const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]
const myArr = Array(1000).fill(21)


/* ---------------    time O(nlogn) space O(1)     ------------------------ */

function partition(arr, startIdx, endIdx) {
  const pivot = arr[endIdx - 1]
  let pIdx = startIdx

  for(let i = startIdx; i < endIdx -1; i++) {
    let curElem = arr[i]

    if(curElem < pivot) {
      arr[i] = arr[pIdx]
      arr[pIdx] = curElem
      pIdx++
    }
  }
  arr[endIdx - 1] = arr[pIdx]
  arr[pIdx] = pivot

  // console.log('pIdx -> ', pIdx)
  // console.log('After Switch -> ', arr)
  return pIdx
}



function quickSort(arr, start = 0, end = arr.length) {
  if(start >= end) return arr
  else {
    let pivotIdx = partition(arr, start, end)

    // edge case to avoid extra iterations
    if((pivotIdx + 1) < (end - 1)) quickSort(arr, pivotIdx + 1, end)
    quickSort(arr, 0, pivotIdx)
  }
}



/* ---------------    time O(nlogn) space O(n)     ------------------------ */

// function quickSort(arr) {
//   // base case for recursion
//   if(arr.length <= 1) return arr

//   // select first elem as pivot
//   const [pivot, ...restArr] = arr
//   const left = []
//   const right = []

//   // iterate through arr, push all smaller nums to leftArr; greater - to right
//   restArr.forEach(el => el < pivot ? left.push(el) : right.push(el))

//   // run f-n recursively on left and right arrays
//   const leftSorted= quickSort(left)
//   const rightSorted = quickSort(right)

//   // return leftSortedArr + pivot + rightSortedArr
//   return leftSorted.concat(pivot).concat(rightSorted)
// }



// console.log(
//   chalk.yellow('sorted -> '),
//   chalk.red(quickSort(myArr))
// )



/* ------        Perfomance F-N              --------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  let perfomance = (end - start) / 100
  console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
  return result
}

console.log(
  chalk.yellow('sorted -> '),
  chalk.red(getPerfomance(quickSort, myArr))
)
