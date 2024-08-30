const split = function(s, sep){
    let res = new Array
    let word = ""
    if (sep == null){
        return res.push(s)
    }
    for (let i = 0; i < s.length; ){
        if (sep == ""){
            res.push(s[i])
            i ++
            continue 
        } else if (sep != "" && s.slice(i, i+sep.length) == sep){
            res.push(word)
            word = ""
            i += sep.length
            continue
        }
        word += s[i]
        if (i == s.length-1){
            res.push(word)
        }
        i++
    }
    return res
}


const join = function(s, joiner){
    let res = ""
    if (joiner == null){
        joiner = ","
    }
    for (let i = 0; i < s.length; i++){
        if (i == 0){
            res += s[i]
        } else {
            res += joiner + s[i]
        }
    }
    return res
}

