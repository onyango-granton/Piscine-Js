const filterKeys = function (obj, func) {
    let shallowCopy = { ...obj }
    Object.keys(shallowCopy).forEach(key => {
        if (!(func(key))) {
            delete shallowCopy[key]
        }
    })
    return shallowCopy
}

const mapKeys = function (obj, func) {
    let shallowCopy = { ...obj }
    Object.keys(shallowCopy).forEach(key => {
        shallowCopy[func(key)] = shallowCopy[key]
        delete shallowCopy[key]
    })
    return shallowCopy
}

const reduceKeys = function (obj, func, initialValue) {
    let shallowCopy = { ...obj }
    let keyArr = Object.keys(shallowCopy)
    initialValue == null ? initialValue = keyArr[0] : null

    if (initialValue == null) {
        initialValue = keyArr[0]
        for (let i = 1; i < keyArr.length; i++) {
          initialValue = func(initialValue, keyArr[i]);
        }
    } else {
        for (let i = 0; i < keyArr.length; i++) {
          initialValue = func(initialValue, keyArr[i]);
        }
    }

    return initialValue
    

}
