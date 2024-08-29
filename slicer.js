const slice = function (string, start, end){
    let res = ""
    if (end == null && start != null){
        if (start < 0){
            start = string.length + start
        }
        for (let i = start; i< string.length; i++){
            res += string[i]
        }
        if (typeof(string) === "string"){
            return res
        } else {
            console.log(typeof(string))
            return res.split("")
        }
    } else if (start != null && end != null){
        if (end < 0){
            end = string.length + end
        }
        if (start < 0){
            start = string.length + start
        }
        for (let i = start; i< end; i++){
            res += string[i]
        }
        if (typeof(string) === "string"){
            return res
        } else {
            return res.split("")
        }
    } else if (start == null && end == null) {
        return string
    }
    
}

