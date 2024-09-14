async function series(funcArray) {
    let resultArr = []
    if (funcArray.length == 0) {
        return []
    }
    for (let i = 0; i < funcArray.length; i++){
        resultArr.push(await funcArray[i]())
    }
    return resultArr
}