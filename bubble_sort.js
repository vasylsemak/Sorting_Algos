const chalk = require('chalk')
// const myArr = [9, 7, 5, 3, 1]
// const myArr = [99, 11, 77, 55, 22, 44]
// const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]
// const myArr = Array(100000).fill(21)
const myArr = []
for (let i = 40000; i >= 0; i--) {
  myArr.push(i)
}
/* ----------------------------------------------------------------- */


const bubbleSort = anArr => {
  let count = 0
  let last = anArr.length -1

  for(let j = 0; j < anArr.length - 1; j++) {
    let first = 0

    while(first < last) {
      count++

      if(anArr[first] > anArr[first + 1]) {
        const tempElem = anArr[first]
        anArr[first] = anArr[first + 1]
        anArr[first + 1] = tempElem
      }
      first++;
    }
    // don't check last sorted elem after full iteration
    last--;
  }

  console.log('Total Iterations : ', count)
  return anArr;
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

// console.log(
//   chalk.red('Before SWAP:  '),
//   chalk.blue(myArr)
// )
// console.log(
  chalk.red('After SWAP:  '),
  chalk.blue(getPerfomance(bubbleSort, myArr))
// )
console.log('\n')



/* ------         F-N CALL              --------------------- */
// console.log('                                                       ')
// console.log('Initial Arr: ', myArr)
// console.log('                                                       ')
// const result = bubbleSort(myArr)
// console.log('                                                       ')
// console.log('SORTED: ', result)
// console.log('                                                       ')
