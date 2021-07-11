const chalk = require('chalk')
let calls = 0

const myArr = [90, 70, 50, 10, 30]
// const myArr = [99, 77, 55, 33, 11]
// const myArr = [20, 40, 60, 80, 100]

// const myArr = []
// for (let i = 15; i >= 0; i--) {
//   myArr.push(i)
// }
console.log(chalk.blue('--------------------------------------------------------------------------------------------------------------'))
console.log('before swap -> ', myArr)
console.log('\n')


/* -------------------------------------------------------------------- */
function partitionHoare(arr, start, end) {
  let pivotIdx = Math.floor((end - start) / 2)
  let pivot = arr[pivotIdx]
  console.log('pivot: ', pivot)
  console.log('ponters -> ' + chalk.yellow(start) + ' and ' + chalk.yellow(end))
  console.log('\n')

  while(start < end) {
    while(arr[start] < pivot) {
      start++
      calls++
      console.log('start:// ', start)
      console.log('\n')
    }
    while(arr[end] > pivot) {
      end--
      calls++
      console.log('end:// ', end)
      console.log('\n')
    }

    if(arr[start] > arr[end]) {
      // swap last and first nums
      let last = arr[end]
      arr[end] = arr[start]
      arr[start] = last

      start++
      end--

      console.log('partSwap', arr)
      console.log('start in IF: ', start)
      console.log('end in IF: ', end)
      console.log('\n')
    }
    calls++
  }

  return arr
}

partitionHoare(myArr, 0, myArr.length -1)
console.log('Calls count ==> ', calls)
