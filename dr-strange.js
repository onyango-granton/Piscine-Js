// Function to determine the day of the week in the new 14-day week format
function addWeek(date) {
    const epoch = new Date("0001-01-01");
    const daysSinceEpoch = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));

  const dayIndex = daysSinceEpoch % 14;
  const weekDays = [
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


  return weekDays[dayIndex];
}

function timeTravel({
  date,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
}) {
  const newDate = new Date(date.getTime());

  newDate.setHours(newDate.getHours() + hours);
  newDate.setMinutes(newDate.getMinutes() + minutes);
  newDate.setSeconds(newDate.getSeconds() + seconds);
  newDate.setMilliseconds(newDate.getMilliseconds() + milliseconds);

  return newDate;
}