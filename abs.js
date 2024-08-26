const isPositive = (num) => (num > 0 ? true : false)

function abs(num){
    if (!isPositive(num)){
        num *= -1
    }
    return num
}