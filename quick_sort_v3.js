const nums = [90, 70, 50, 10, 30, 666]

// const nums = []
// for (let i = 60000; i >= 0; i--) {
//   nums.push(Math.ceil(Math.random() * 60000))
// }



function quickSort(arr, first = 0, last = arr.length -1) {
  let pivotIdx = partition(arr, first, last)

  if(first < pivotIdx) quickSort(arr, first, pivotIdx -1)
  if(last > pivotIdx) quickSort(arr, pivotIdx, last)

  return arr
}


function partition(arr, first, last) {
  let pivot = arr[last]
  let j = first -1

  for(let i = first; i < last; i++) {
    // if current elem is less than pivot, swap
    if(arr[i] < pivot) {
      j++
      swap(arr, j, i)
    }
  }
  // insert pivot after less elem
  swap(arr, j+1, last)
  // return pivot Idx
  return j+1
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx2]
  arr[idx2] = arr[idx1]
  arr[idx1] = temp
}



/* ----------        Perfomance F-N              -------------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  let perfomance = (end - start) / 1000
  console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
  return result
}

// getPerfomance(quickSortV2, myArr)
console.log(
  'quickSort sorted ---> ',
  getPerfomance(quickSort, nums)
)
console.log('\n')