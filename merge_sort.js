const myArr = [11, 99, 33, 77, 55]
// const myArr = [40, 30, 20, 10]
// const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]


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
let count = 0

function mergeSortAlgo(arr) {
  // if arr 1 element or [] - it is sorted!
  if(arr.length < 2) return arr

  else {
    count ++
    // split array in 2 halves
    const [left, right] = splitArray(arr)
    // continiue spliting recursively untill 1 elem array
    const recursiveLeft = mergeSortAlgo(left)
    const recursiveRight = mergeSortAlgo(right)

    // merge combined halfves into sorted whole
    return sortAndMerge(recursiveLeft, recursiveRight)
  }
}


console.log('Input: ', myArr)
console.log('Sorted: ', mergeSortAlgo(myArr))
console.log('recursive calls --> ', count)
