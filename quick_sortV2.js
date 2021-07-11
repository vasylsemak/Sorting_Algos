const chalk = require('chalk')
// const myArr = [90, 70, 50, 10, 30, 666]
// const myArr = [9, 7, 5, 3]
// const myArr = [20, 40, 60, 80, 100]

const myArr = []
for (let i = 60; i >= 0; i--) {
  myArr.push(i)
}



/* ----------        partitionHoare F-N              -------------------------- */
function partitionHoare(arr, start, end) {
  let pivotIdx = Math.floor((start + end) / 2)
  let pivot = arr[pivotIdx]

  while(start < end) {
    while(arr[start] < pivot) {
      start++
    }
    while(arr[end] > pivot) {
      end--
    }

    if(arr[start] > arr[end]) {
      // swap last and first nums
      let last = arr[end]
      arr[end] = arr[start]
      arr[start] = last

      start++
      end--
    }
  }

  return start
}


/* ----------        quickSortV2 F-N              -------------------------- */
function quickSortV2(arr, left = 0, right = arr.length -1) {
  if(left >= right) return
  const pivotIdx = partitionHoare(arr, left, right)

  if(left < pivotIdx)  quickSortV2(arr, 0, pivotIdx)
  if(right > pivotIdx)  quickSortV2(arr, pivotIdx +1, right)

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


console.log(
  chalk.red('Before SWAP:  '),
  chalk.blue(myArr)
)
console.log(
  chalk.red('After SWAP:  '),
  chalk.blue(getPerfomance(quickSortV2, myArr))
)
console.log('\n')
