const reverse = function(arg){
    let res
    if (arg instanceof Array){
        res = new Array
        for (let i = arg.length - 1; i >= 0; i--){
            res.push(arg[i])
        }
    } else {
        res = ""
        for (let i = arg.length - 1; i >= 0; i--){
            res += arg[i]
        }
    }
    return res
}