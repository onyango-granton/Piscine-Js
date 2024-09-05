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
    },0);
}

const funcExec = function (funcArr) {
    return funcArr.reduce((x,y) => y(x),0)
}
