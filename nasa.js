const nasa = function(num){
    let res = ""
    for (let i = 1; i <= num; i++){
        if (i % 15 == 0){
            res += " NASA"
            continue
        } else if (i % 5 == 0){
            res += " SA"
        } else if (i % 3 == 0){
            res += " NA"
        } else {
            if (i == 1){
                res += i.toString()
            } else {
                res += " "+i.toString()
            }
            
        }
        
    }
    return res
}
