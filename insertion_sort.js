// const myArr = [10, 50, 40, 90, 30]
// const myArr = [99, 77, 55, 33, 11]
// const myArr = [20, 40, 60, 80, 100]
const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}


/* ----------        V1 - faster             -------------------------- */
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {

    if(arr[i-1] > arr[i]) {
      let tempElem = arr[i]
      let pvt = i-1

      // Don't swap every greater Elem with TempElem, iterate untill get less
      // elem and INSERT after it
      while(pvt >=0 && arr[pvt] > tempElem) {
        arr[pvt+1] = arr[pvt]
        pvt--
      }
      // insert tempElem after less elem
      arr[pvt+1] = tempElem
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
//       // count every insertion(swap)
//       count++
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
