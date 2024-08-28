const multiply =  function(a,b){
    if (a == 0 || b == 0){
        return 0
    }
    let res = a
    for (let i = 1; i < b; i ++){
        res += a
    }

    return res

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
    var times = 0
    while (a >= b) {
        a = a - b
        times++
    }
    return times

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
    while (a >= b) {
        a = a - b
    }
    return a
}