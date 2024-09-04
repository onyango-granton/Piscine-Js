const dayOfTheYear = function (date) {
    let year = date.getFullYear()
    let firstDate = new Date(`01-01-${year}`)
    let timeElapse = date.getTime() - firstDate.getTime()

    let daysElapsed = Math.round(timeElapse / (24 * 60 * 60 * 1000));

    if (date.getDate() == 1 && date.getMonth() == 0) {
        return 1
    } else {
        return daysElapsed + 1
    }
} 
