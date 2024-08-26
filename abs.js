const isPositive = (num) => (num > 0 ? true : false)

function abs(num){
    if (num === 0){
        return 0
    }
    if (!isPositive(num)){
        num *= -1
    }
    return num
}
