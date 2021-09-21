const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}


// /* ----------        quickSort Hoare V2 F-N         -------------------- */
function quickSort(arr, left = 0, right = arr.length -1) {
  if(left >= right) return

  const pivotIdx = partitionHoare(arr, left, right)

  quickSort(arr, left, pivotIdx -1)
  quickSort(arr, pivotIdx +1, right)

  return arr
}


/* ----------        partitionHoare F-N              ------------------------ */
function partitionHoare(arr, left, right) {
  let pivot = arr[left]
  let start = left +1, end = right

  while(start <= end) {

    // if left side num less than Pivot - move left pointer
    while(arr[start] < pivot) start++
    // if right side num greater than Pivot - move right pointer
    while(arr[end] > pivot) end--

    // if poiunters go beyond each ohter - all nums are sorted
    // else swap greater on the left and less on the right
    if(start <= end) {
      swap(arr, start, end)
      // move pointers
      start++
      end--
    }
  }
  // swap pivot and last least num
  swap(arr, left, end)

  // return pivot index
  return end
}


/* ----------------        swap F-N              -------------------------- */
function swap(arr, left, right) {
  let temp = arr[right]
  arr[right] = arr[left]
  arr[left] = temp
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
  getPerfomance(quickSort, myArr)
)
console.log('\n')
