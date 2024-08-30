const get = function(src,path){
    var res = ""
    values = path.split('.')
    for (let i = 0; i < values.length; i++){
        res = src[values[i]]
        src = res
        
    }
    return res
}
