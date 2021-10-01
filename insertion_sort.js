// const myArr = [10, 50, 40, 90, 30]
// const myArr = [99, 77, 55, 33, 11]
// const myArr = [20, 40, 60, 80, 100]
const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}


/* ----------        V1 - faster             -------------------------- */
function insertionSort(arr) {
  if(arr.length < 2) return arr

  for(let i = 1; i < arr.length; i++) {

    if(arr[i-1] > arr[i]) {
      let tempElem = arr[i]
      let holeIdx = i

      // Iterate until found less elem and INSERT after it
      while(holeIdx > 0 && tempElem < arr[holeIdx - 1]) {
        // push every greater elem into the hole
        arr[holeIdx] = arr[holeIdx - 1]
        holeIdx--
      }
      // insert tempElem between less and greater elements
      arr[holeIdx] = tempElem
    }
  }

  return arr
}


/* ----------        V2 - simple             -------------------------- */
// function insertionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let j = i + 1

//     while (j >= 1 && (arr[j - 1] > arr[j])) {
//       let keyElem = arr[j]
//       arr[j] = arr[j - 1]
//       arr[j - 1] = keyElem
//       j--
//     }
//   }

//   return arr
// }


/* ----------        Perfomance F-N              -------------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  let perfomance = (end - start) / 1000
  console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
  return result
}

// getPerfomance(insertionSort, myArr)
console.log(
  'insertionSort sorted ---> ',
  getPerfomance(insertionSort, myArr)
)
console.log('\n')
