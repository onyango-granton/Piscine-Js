const forEach = function (array, func) {
    let res = []
    for (let i = 0; i < array.length; i++){
        res.push(func(array[i]))
    }
    return res
}