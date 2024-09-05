const map = function (array, mapMethod) {
    let res = []
    for (let i = 0; i < array.length; i++){
        res.push(mapMethod(array[i]))
    }
    return res
}

const flatMap = function (array, flatMapMethod) {
    let res = []
    let res2 = []
    for (let i = 0; i < array.length; i++){
        res.push(flatMapMethod(array[i]))
    }
    for (let i = 0; i < res.length; i++){
        if (res[i] instanceof Array) {
            for (let j = 0; j < res[i].length; j++){
                res2.push(res[i][j])
            }
        } else {
            res2.push(res[i])
        }       
    }

    return res2
}