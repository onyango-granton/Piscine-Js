const longWords = function (elementArray) {
    return elementArray.every((x) => x.length > 4)
}

const oneLongWord = function (elementArray) {
    return elementArray.some((x) => x.length > 9)
}

const noLongWords = function (elementArray) {
    return elementArray.every((x) => x.length < 7)
}
