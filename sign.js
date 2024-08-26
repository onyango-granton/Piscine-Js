function sign(num){
    if (num == 0){
        return 0
    } else if (num < 0){
        return -1
    } else {
        return 1
    }
}

const sameSign = (num1, num2) => sign(num1) == sign(num2) ? true : false
