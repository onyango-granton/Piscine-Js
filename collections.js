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

// const is = {}

// is.obj = (value) => !(is.arr(value)) && typeof(value) === 'object' && is.truthy(value)
// is.num = (value) => typeof(value) === 'number' 
// is.nan = (value) => Number.isNaN(value) 
// is.str = (value) => typeof(value) === 'string'
// is.bool = (value) => typeof(value) === 'boolean' 
// is.undef= (value) => typeof(value) === 'undefined' 
// is.def = (value) => !is.undef(value)
// is.arr = (value) => Array.isArray(value)
// is.fun = (value) => typeof(value) === 'function' 
// is.falsy = (value) => {
//     return value === false || value === 0 || value === -0 ||
//            value === 0n || value === '' || value === null || 
//            value === undefined || Number.isNaN(value);
// }
// is.truthy = (value) => !is.falsy(value)

function superTypeOf(arg){
    if (typeof(arg) === 'object' && arg.size !== undefined){
        if (arg instanceof Map){
            return 'Map'
        } else if (arg instanceof Set){
            return 'Set'
        }     
    }else if (typeof(arg) === 'object' ){
        return 'Object'
    } else if (typeof(arg) === 'string'){
        return 'String'
    } else if (typeof(arg) === 'number'){
        return 'Number'
    } else if (Number.isNaN(arg)){
        return 'Number'
    } else if (Array.isArray(arg)){
        return 'Array'
    } else if (arg === null) {
        return 'null'
    } else if (typeof(arg) === 'undefined'){
        return 'undefined'
    } else if (typeof(arg) === 'function'){
        return 'Function'
    }
}

// let map2 = new Map()

// let obj = new Object()

// let set2 = new Set([1,4,5,1,2,4])

// set2.add

// // Object.keys

// console.log(superTypeOf(map2))
// console.log(superTypeOf(obj))
// console.log(superTypeOf(set2))
// // console.log(set2.add())