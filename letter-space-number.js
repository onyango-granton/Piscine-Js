const letterSpaceNumber = function (string) {
    let pattern = /[a-zA-Z]\s\d(?!\s*[\da-zA-Z])/g
    const match = string.match(pattern)

    if (!match) {
        return []
    }
    return match
}
