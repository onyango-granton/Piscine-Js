const vowelDots = function (string) {
    const charset = /[aeiou]/g
    string = string.replace(charset, (match) => match+".")
    return string
}
