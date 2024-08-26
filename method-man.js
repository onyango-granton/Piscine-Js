function words(s){
    return s.split(" ")
}

function sentence(stringArr){
    return stringArr.Join(" ")
}

function yell(s){
    return s.toUpperCase()
}

function whisper(s){
    return "*"+s.toLowerCase()+"*"
}

function capitalize(s){
    return s[0].toUpperCase()+s.slice(1).toLowerCase()
}


console.log(words(""))