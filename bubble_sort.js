const myArr = [10, 70, 50, 90, 30]
// const myArr = [1, 3, 5, 9, 7]
// const myArr = [11, 33, 55, 77, 99]
// const myArr = Array(1000000).fill(21)
/* ----------------------------------------------------------------- */


const bubbleSort = anArr => {
  let count = 0
  let last = anArr.length -1

  for(let j = 0; j < anArr.length - 1; j++) {
    // no need to shift if sorted
    if(anArr[j] > anArr[j + 1]) {
      let first = 0

      while(first < last) {
        count++

        if(anArr[first] > anArr[first + 1]) {
          const tempElem = anArr[first]
          anArr[first] = anArr[first + 1]
          anArr[first + 1] = tempElem
          console.log('elements shifted ==> ', anArr)
        }
        first++;
      }
      // don't check last sorted elem after full iteration
      last--;
      console.log('End Pointer -> ', last)
    }

  }
  console.log('Total Iterations : ', count)
  return anArr;
}


/* ------         F-N CALL              --------------------- */
console.log('Initial Arr: ', myArr)
console.log('                                                       ')
const result = bubbleSort(myArr)
console.log('                                                       ')
console.log('SORTED: ', result)



/* ------        Perfomance F-N              --------------------- */
function getPerfomance(func, arr) {
  const start = Date.now()
  const result = func(arr)
  const end = Date.now()
  console.log('PERFOMANCE === ', end - start)
  return result
}

