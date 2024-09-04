const countLeapYears = function (date) {
    const year = date.getFullYear();
    
    let countLeapYear = 0

    for (let i = 1; i < year; i++){
        if (i % 100 == 0) {
            if (i % 400 == 0) {
                countLeapYear++
                continue
            } else {
                continue
            }
        }
        i % 4 == 0 ? countLeapYear++ : false
    }

    return countLeapYear
}
