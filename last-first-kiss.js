function first(arg){
    return arg[0]
}

function last(arg){
    let last = arg.length - 1
    return arg[last]
}

function kiss(arg){
    return [last(arg),first(arg)]
}
