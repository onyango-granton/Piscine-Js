const sameAmount = function (str, reg1, reg2) {
    let match1 = str.match(new RegExp(reg1.source,'g'))
    if (match1 == null) {
        match1 = []
    }
    let match2 = str.match(new RegExp(reg2.source,'g'))
    if (match2 == null) {
        match2 = []
    }

    console.log(match1.length, match2);

    return match1.length === match2.length
}


// console.log(sameAmount("hello from the other side",/[z]/,/[o]/))