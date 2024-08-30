const get = function(src,path){
    let res = ""
    let values = path.split('.')
    for (let i = 0; i < values.length; i++){
        res = src[values[i]]
        if (res === undefined){
            return undefined
        }
        src = res
        
    }
    return res
}

// console.log(get({ nested: { key: 'value' } }, 'nx.nx'))