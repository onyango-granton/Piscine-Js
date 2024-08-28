const multiply =  function(a,b){
    if (a == 0 || b == 0){
        return 0
    }
    let sign = false
    if (a < 0){
        a = Math.abs(a)
        sign = !sign
    }
    if (b < 0){
        b = Math.abs(b)
        sign = !sign
    }
    let res = a
    for (let i = 1; i < b; i ++){
        res += a
    }
    if (sign) {
        return -res
    } else {
        return res
    }
}

const divide = function(a,b){
    if (a == 0 && b == 0){
        return NaN
    }
    if (a == 0){
        return 0
    }
    if (b == 0){
        return Infinity
    }
    let sign = false
    if (a < 0){
        a = Math.abs(a)
        sign = !sign
    }
    if (b < 0){
        b = Math.abs(b)
        sign = !sign
    }
    var times = 0
    while (a >= b) {
        a = a - b
        times++
    }
    if (sign) {
        return -times
    } else {
        return times
    }

}

const modulo = function(a,b){
    if (a == 0 && b == 0){
        return NaN
    }
    if (a == 0){
        return 0
    }
    if (b == 0){
        return NaN
    }
    if (a < 0 && b < 0){
        return -0
    }
    if (a < 0){
        return -0
    }
    if (b < 0){
        return 0
    }

    while (a >= b) {
        a = a - b
    }
    return a
}


