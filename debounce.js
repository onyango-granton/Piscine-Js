const debounce = function (func, waitTime) {
  let time = Date.now()
  let stopTime = time + waitTime

  while (true){
    let countTime = Date.now()
    if (countTime + 1000 >= stopTime ) {
      return func
    }
  }


}
