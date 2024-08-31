const sameAmount = function (str, reg1, reg2) {
    match1 = str.match(reg1)
    if (match1 == null) {
        match1 = []
    }
    match2 = str.match(reg2)
    if (match2 == null) {
        match2 = []
    }

    console.log(match1.length, match2);

    return match1.length === match2.length
}


// console.log(sameAmount("hello from the other side",/[z]/g,/[o]/g))