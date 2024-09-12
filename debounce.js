const debounce = function (func, waitTime) {
  let time = Date.now()
  let stopTime = time + waitTime

  while (true){
    let countTime = Date.now()
    if (countTime >= stopTime) {
      return func
    }
  }


}
