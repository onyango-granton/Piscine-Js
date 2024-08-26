function arrToSet(arr){
    return new Set(arr)
}

function arrToStr(arr){
    return arr.join('')
}


function setToArr(set) {
    return [...set]
}

function setToStr(set) {
    return [...set].join('')
}

function strToObj(str) {
    return arrToObj(strToArr(str))
}

function strToArr(str) {
    return str.split('')
}

function strToSet(str) {
    return arrToSet(strToArr(str))
}

function mapToObj(map) {
    return Object.fromEntries(map.entries())
}

function objToArr(obj) {
    return Object.values(obj)
}

function objToMap(obj) {
    return new Map(Object.entries(obj))
}

function arrToObj(arr) {
    return Object.assign({},arr)
}
