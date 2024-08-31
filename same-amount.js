const sameAmount = function (str, reg1, reg2) {
    match1 = str.match(reg1)
    if (match1 == null) {
        match1 = []
    }
    match2 = str.match(reg2)
    if (match2 == null) {
        match2 = []
    }

    return match1 === match2
}


// console.log(sameAmount("hello from the other side",/[z]/,/[o]/))