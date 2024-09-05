const adder = function (numArray) {
    return numArray.reduce((x,y) => x + y, 0)
}

const sumOrMul = function (numArray) {
    return numArray.reduce((x, y) => {
        if (y % 2 === 0) {
            return x * y
        } else {
            return x + y
        }
    },1);
}

const funcExec = function (funcArr) {
    return funcArr.reduce((x,y) => y(x),0)
}