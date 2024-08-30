const triangle = function(str,num){
    let res = ""
    for (let i = 1; i <= num; i++){
        if (i == num){
            for (let j = 0; j < i;j++){
                res += str
            }
            
        } else {
            for (let j = 0; j < i;j++){
                res += str
                if (j == i-1){
                    res += "\n"
                }
            }
            // res += str * i +"\n"
        }

    }
    return res
}

// console.log(triangle("*",5))
