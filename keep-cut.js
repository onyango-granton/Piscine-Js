const cutFirst = function(string){
    return string.slice(2)
}

const cutLast = function(string){
    return string.slice(0, string.length-2)
}

const cutFirstLast = function(string){
    return cutLast(cutFirst(string))
}

const keepFirst = function(string){
    return string.slice(0,2)
}

const keepLast = function(string){
    return string.slice(-2)
}

const keepFirstLast = function(string){
    if (string.length == 2 || string.length == 3){
        return string
    }
    return keepFirst(string) + keepLast(string)
}

console.log(keepFirstLast("af"))