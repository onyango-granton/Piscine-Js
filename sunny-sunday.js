const sunnySunday = function (date) {
    const startDate = new Date("0001-01-01");

    let timeElapsed = Math.abs(date.getTime() - startDate.getTime())

    let daysElapsed = (timeElapsed / (24 * 60 * 60 * 1000))
    
    let modulus = daysElapsed % 6

    let dayWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
    }

    return dayWeek[modulus]
 }
