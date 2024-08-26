function arrToSet(arr){
    return new Set(arr)
}

function arrToStr(arr){
    return arr.toString()
}


function setToArr(set) {
    return [...set]
}

function setToStr(set) {
    return [...set].join(' ')
}

function strToArr(str) {
    return str.split(' ')
}

function strToSet(str) {
    return arrToSet(strToArr(str))
}

function mapToObj(map) {
    return Object.fromEntries(map.entries())
}

function objToArr(obj) {
    return new Array(Object.entries(obj))
}

function objToMap(obj) {
    return new Map(Object.entries(obj))
}

function arrToObj(arr) {
    return Object.assign({},arr)
}
