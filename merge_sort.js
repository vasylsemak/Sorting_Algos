// const myArr = [9, 7, 5, 3, 1]
// const myArr = [99, 11, 77, 55, 22, 44]
const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]
// const myArr = Array(10000).fill(21)
/* ----------------------------------------------------------------- */


const chalk = require('chalk')

// Split Array
const splitArray = arr => {
  let i = Math.ceil(arr.length / 2)
  return [arr.slice(0, i), arr.slice(i)]
}


// Merge Sorted
const sortAndMerge = (arr1, arr2) => {
  const merged = []

  while(arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) merged.push(arr1.shift())
    if(arr1[0] > arr2[0])  merged.push(arr2.shift())
  }

  const leftArr = arr1.length ? arr1 : arr2
  return [...merged, ...leftArr]
}



/* --------    MERGE SORT ------------------------------ */
function mergeSortAlgo(arr) {
  // if arr 1 element or [] - it is sorted!
  if(arr.length < 2) return arr

  else {
    // split array in 2 halves
    const [left, right] = splitArray(arr)
    // continiue spliting recursively untill 1 elem array
    const recursiveLeft = mergeSortAlgo(left)
    const recursiveRight = mergeSortAlgo(right)

    // merge combined halfves into sorted whole
    return sortAndMerge(recursiveLeft, recursiveRight)
  }
}



// console.log('Input: ', myArr)
// console.log('Sorted: ', mergeSortAlgo(myArr))



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
  chalk.red(getPerfomance(mergeSortAlgo, myArr))
)
