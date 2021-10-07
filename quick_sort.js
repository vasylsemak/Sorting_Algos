// const nums = [90, 70, 50, 10, 30, 666]

const nums = []
for (let i = 60000; i >= 0; i--) {
  nums.push(Math.ceil(Math.random() * 60000))
}



function quickSort(arr, first = 0, last = arr.length -1) {
  // base case for recursion
  if(first >= last) return

  // get index of sorted elem
  let pivotIdx = partition(arr, first, last)

  // recursively sort left and right sublists
  quickSort(arr, first, pivotIdx -1)
  quickSort(arr, pivotIdx +1, last)

  return arr
}


function partition(arr, first, last) {
  let pivot = arr[last]
  let j = first

  for(let i = first; i < last; i++) {
    // if current elem is less than pivot, swap
    if(arr[i] < pivot) {
      swap(arr, j, i)
      j++
    }
  }
  // insert pivot after less elem
  swap(arr, j, last)
  // return pivot Idx
  return j
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
