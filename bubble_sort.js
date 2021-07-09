// const myArr = [9, 7, 5, 3, 1]
// const myArr = [99, 11, 77, 55, 22, 44]
const myArr = [263, 173, 57, 475, 86, 5753, 90, 439, 83, 52, 42, 45, 324]
// const myArr = Array(100000).fill(21)
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



/* ------         F-N CALL              --------------------- */
// console.log('                                                       ')
// console.log('Initial Arr: ', myArr)
// const result = bubbleSort(myArr)
// console.log('SORTED: ', result)
// console.log('                                                       ')



/* ------        Perfomance F-N              --------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  let perfomance = (end - start) / 100
  console.log('PERFOMANCE ===> ', perfomance, ' seconds.')
  return result
}

getPerfomance(bubbleSort, myArr)
