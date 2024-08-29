const slice = function (string, start, end){
    let res
    if (typeof(string) === 'String'){
        res = ""
    } else {
        res = new Array
    }
    if (end == null && start != null){
        if (start < 0){
            start = string.length + start
        }
        for (let i = start; i< string.length; i++){
            if (typeof(string) === 'String'){
                res += string[i]
            } else {
                res.push(string[i])
            }
        }
        return res
    } else if (start != null && end != null){
        if (end < 0){
            end = string.length + end
        }
        for (let i = start; i< string.length; i++){
            if (typeof(string) === 'String'){
                res += string[i]
            } else {
                res.push(string[i])
            }
        }
        return res
    } else if (start == null && end == null) {
        return string
    }
    
}

