const replica = function (...args) {
    let res = {}
    for (let i = 0; i < args.length; i++){
        if (typeof (args[i]) == "object") {
            for (let j = 0; j < args[i].length; i++){
                res = Object.assign(res, ...args[i][j])
            }
            continue
        }
        res = Object.assign(res, {...args[i] })
    }
    //console.log(res)
    return res
}



console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }), { a: { b: 1, c: 23 } })