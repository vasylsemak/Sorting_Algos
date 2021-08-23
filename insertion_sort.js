// const myArr = [10, 50, 40, 90, 30]
// const myArr = [99, 77, 55, 33, 11]
// const myArr = [20, 40, 60, 80, 100]
const myArr = []
for (let i = 60000; i >= 0; i--) {
  myArr.push(Math.ceil(Math.random() * 60000))
}


function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1

    while (j >= 1 && (arr[j -1] > arr[j])) {
      let keyElem = arr[j]

      arr[j] = arr[j - 1]
      arr[j - 1] = keyElem
      j--
    }
  }

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

// getPerfomance(insertionSort, myArr)
console.log(
  'insertionSort sorted ---> ',
  getPerfomance(insertionSort, myArr)
)
console.log('\n')
