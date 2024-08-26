function concatStr(arg1, arg2){
    if (typeof(arg1) === 'number'){
        arg1 = arg1.toString()
    }
    if (typeof(arg2) === 'number'){
        arg2 = arg2.toString()
    }
    return arg1 + arg2
}
