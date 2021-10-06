// const myArr = [9, 7, 5, 3, 1]
// const myArr = [99, 11, 77, 55, 22, 44]
// const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]
// const myArr = Array(10000).fill(21)
const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}
/* ----------------------------------------------------------------- */



// Split Array
const splitArray = arr => {
  let i = Math.ceil(arr.length / 2)
  return [arr.slice(0, i), arr.slice(i)]
}


// Merge Sorted
const sortAndMerge = (arr1, arr2) => {
  const merged = []

  while(arr1.length && arr2.length) {
    arr1[0] < arr2[0]
      ? merged.push(arr1.shift())
      : merged.push(arr2.shift())
  }
  const restArr = arr1.length ? arr1 : arr2

  return [...merged, ...restArr]
}

// MERGE SORT
function mergeSortAlgo(arr) {
  // if arr 1 element or [] - it is sorted!
  if(arr.length < 2) return arr

  // split array in 2 halves
  const [left, right] = splitArray(arr)
  // continiue spliting recursively untill 1 elem array
  const recursiveLeft = mergeSortAlgo(left)
  const recursiveRight = mergeSortAlgo(right)

  // merge combined halves into sorted whole
  return sortAndMerge(recursiveLeft, recursiveRight)
}



/* ------        Perfomance F-N              --------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  let perfomance = (end - start) / 1000
  console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
  return result
}

// getPerfomance(mergeSortAlgo, myArr)
console.log(
  'mergeSort sorted ---> ',
  getPerfomance(mergeSortAlgo, myArr)
)
console.log('\n')

