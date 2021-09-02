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
function bubbleSort(arr) {

  for(let i = 0; i < arr.length -1; i++) {
    for(let j = 1; j < arr.length -i; j++) {

      if(arr[j-1] > arr[j]) {
        swap(arr, j-1)
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
//         swap(anArr, first)
//       }
//       first++;
//     }
//     // don't check last sorted elem after full iteration
//     last--;
//   }

//   return anArr;
// }


// f-n to swap elements
function swap(arr, j) {
  const temp = arr[j + 1]
  arr[j + 1] = arr[j]
  arr[j] = temp
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

// getPerfomance(bubbleSort, myArr)
console.log(
  'bubbleSort sorted ---> ',
  getPerfomance(bubbleSort, myArr)
)
console.log('\n')
