const DNA = function(string){
    let res = ""
    for (let i = 0; i < string.length; i++){
        res += replace(string[i])
    }
    return res
}

const RNA = function(string){
    let res = ""
    for (let i = 0; i < string.length; i++){
        res += replace(string[i])
    }
    return res
}

const replace = function(str){
    if (str == "G" || str == "g"){
        return "C"
    }
    if (str == "C" || str == "c"){
        return "G"
    }
    if (str == "T" || str == "t"){
        return "A"
    }
    if (str == "A" || str == "a"){
        return "U"
    }
}
