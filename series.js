async function series(funcArray) {
    if (funcArray.length == 0) {
        return []
    }
    for (let i = 0; i < funcArray.length; i++){
        await funcArray[i]
    }
}