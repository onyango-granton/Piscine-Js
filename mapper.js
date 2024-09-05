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
    for (let i = 0; i < array.length; i++) {
        const result = flatMapMethod(array[i]);
        if (Array.isArray(result)) {
            res2.push(...result);
        } else if (result !== undefined) {
            res2.push(result);
        } else {
            res2.push('undefined');
        }
    }

    return res2
}