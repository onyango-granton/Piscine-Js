const invert = function (objectArg) {
    const resObj = {}
    Object.entries(objectArg).forEach(([key, value]) => {
        resObj[value] = key
    })
    return resObj
}
