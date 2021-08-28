// const myArr = [9, 7, 5, 3, 1]
// const myArr = [3, 1, 5, 7, 9]
// const myArr = [99, 11, 77, 55, 22, 44]
// const myArr = [99, 95, 88, 84, 77, 74, 66, 55, 31, 22, 21, 19, 1000]
// const myArr = Array(1000).fill(21)
const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}



/* ----------------------------  Version 1 ------------------------------ */
const bubbleSort = arr => {
  for(let i = 0; i < arr.length -1; i++) {
    for(let j = 1; j < arr.length -i; j++) {

      if(arr[j-1] > arr[j]) {
        const temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      }
    }
  }

  return arr
}


/* ----------------------------  Version 2 ------------------------------ */
// const bubbleSort = anArr => {
//   let last = anArr.length -1

//   for(let j = 0; j < anArr.length -1; j++) {
//     let first = 0

//     while(first < last) {

//       if(anArr[first] > anArr[first +1]) {
//         const tempElem = anArr[first +1]
//         anArr[first +1] = anArr[first]
//         anArr[first] = tempElem
//       }
//       first++;
//     }
//     // don't check last sorted elem after full iteration
//     last--;
//   }

//   return anArr;
// }




/* ------        Perfomance F-N              --------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  let perfomance = (end - start) / 1000
  console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
  return result
}

// getPerfomance(bubbleSort, myArr)
console.log(
  'bubbleSort sorted ---> ',
  getPerfomance(bubbleSort, myArr)
)
console.log('\n')


/* ------         F-N CALL              --------------------- */
// console.log('                                                       ')
// console.log('Initial Arr: ', myArr)
// console.log('                                                       ')
// const result = bubbleSort(myArr)
// console.log('                                                       ')
// console.log('SORTED: ', result)
// console.log('                                                       ')
