// const myArr = [90, 70, 50, 10, 30, 444]
// const myArr = [9, 7, 5, 3]
// const myArr = [20, 40, 60, 80, 100]

const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}



/* ----------        partitionHoare F-N              -------------------------- */
function partitionHoare(arr, start, end) {
  let pivot = Math.floor((start + end) / 2)

  // while left pointer NOT greater than right
  while(start <= end) {

    // if left side num less than Pivot - move left pointer
    while(arr[start] < arr[pivot]) {
      start++
    }
    // if right side num greater than Pivot - move right pointer
    while(arr[end] > arr[pivot]) {
      end--
    }

    // if poiunters go beyond each ohter - all nums are sorted
    // else swap greater on the left and less on the right
    if(start <= end) {
      let temp = arr[end]
      arr[end] = arr[start]
      arr[start] = temp

      // move pointers
      start++
      end--
    }
  }

  // return pivot
  return start
}



// /* ----------        quickSortV2 F-N              -------------------------- */
function quickSort(arr, left = 0, right = arr.length -1) {
  const pivotIdx = partitionHoare(arr, left, right)

  if(left < pivotIdx -1)  quickSort(arr, left, pivotIdx -1)
  if(right > pivotIdx)  quickSort(arr, pivotIdx, right)

  return arr
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
