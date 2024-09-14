async function series(funcArray) {
    for (let i = 0; i < funcArray.length; i++){
        await funcArray[i]
    }
}