const debounce = function (func, waitTime) {
  let time = Date.now()
  let stopTime = time + waitTime - 1000

  while (true){
    let countTime = Date.now()
    if (countTime >= stopTime) {
      return func
    }
  }


}
