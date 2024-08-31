const letterSpaceNumber = function (string) {
    let pattern = /[a-zA-Z]\s\d(?![\da-zA-Z])/g
    const match = string.match(pattern)

    if (!match) {
        return []
    }
    return match
}


// console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."));