const addWeek = function (arg) {
  const epoch = new Date("0001-01-01");

  let timeBtwn = arg - epoch;

  let days = timeBtwn / (1000 * 60 * 60 * 24);

  let day = days % 14;

  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  return weekDays[day];
};

const timeTravel = function ({ date, hour, minute, second }) {
  let newDate = new Date()
  newDate.setTime(date.getTime());
  newDate.setHours(hour)
  newDate.setMinutes(minute)
  newDate.setSeconds(second)
  newDate.toLocaleString("en-GB", { timeZone: "Europe/London" });
  return newDate;
};

// console.log(addWeek(new Date("0001-01-02")));
// console.log(addWeek(new Date("0001-01-08")));


// console.log(
//   timeTravel({
//     date: new Date("2020-05-29 23:25:22"),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString()
// );
