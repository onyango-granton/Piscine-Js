const adder = function (numArray, initialValue) {
    if (initialValue == null) {
        initialValue = 0
    }
    return numArray.reduce((x,y) => x + y, initialValue)
}

const sumOrMul = function (numArray, initialValue) {
    if (initialValue == null) {
        initialValue = 0
    }
    return numArray.reduce((x, y) => {
        if (y % 2 === 0) {
            return x * y
        } else {
            return x + y
        }
    },initialValue);
}

const funcExec = function (funcArr, initialValue) {
    if (initialValue == null) {
        initialValue = 0
    }
    return funcArr.reduce((x,y) => y(x),initialValue)
}
