const isFriday = (arg) => arg.toString().slice(0, 3) === "Fri"

const isWeekend = (arg) =>
    arg.toString().slice(0, 3) === "Sat" || arg.toString().slice(0, 3) === "Sun";
  
const isLeapYear = function (arg) {
    let splitString = arg.toString().split(" ")
    let year = Number(splitString[3])
    return year % 4 === 0
}

const isLastDayOfMonth = function (arg) {
    let tomorrow = new Date()
    tomorrow.setTime(arg.getTime() + (24 * 60 * 60 * 1000))
    
    if (tomorrow.getMonth() > arg.getMonth()) {
        return true
    }
    return false
}

