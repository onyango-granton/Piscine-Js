const vowelDots = function (string) {
    const vowels = /[aeiou]/g
    string = string.replace(vowels, (match) => match+".")
    return string
}
