// const nums = [90, 70, 50, 10, 30, 666]
const nums = []
for (let i = 60000; i >= 0; i--) {
  nums.push(Math.ceil(Math.random() * 60000))
}


/*
  ONE SWOP FOR EACH ELEMENT ONLY
  - define pointer for sorted part at 0th index
  - find the least elem index and move at the pointer index
  - move pointer further
*/
function selectionSort(arr) {

  for(let i = 0; i < arr.length - 1; i++) {
    let leastIdx = i
    let flag = 0

    for(let j = i + 1; j < arr.length; j++) {

      if(arr[j] < arr[leastIdx]) {
        leastIdx = j
        flag++
      }
    }

    if(!flag) break
    swap(arr, i, leastIdx)
  }

  return arr
}


function swap(arr, a, b) {
  let temp = arr[b]
  arr[b] = arr[a]
  arr[a] = temp
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
  'selectionSort sorted ---> ',
  getPerfomance(selectionSort, nums)
)
console.log('\n')
