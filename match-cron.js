const matchCron = function (cron, date) {
  let splittedCron = cron.split(" ");
  let cronMinute = splittedCron[0] === "*" ? 0 : splittedCron[0];
  let cronHour = splittedCron[1] === "*" ? 0 : splittedCron[1];
  let cronMonthDay = splittedCron[2] === "*" ? 0 : splittedCron[2];
  let cronMonth = splittedCron[3] === "*" ? 0 : splittedCron[3];
  let cronWeekDay = splittedCron[4] === "*" ? 0 : splittedCron[4];

  let monthMapper = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  let dayMapper = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7,
  };

  let dateString = date.toString();
  let dateMinute = dateString.slice(19, 21);
  let dateHour = dateString.slice(16, 18);
  let dateMonthDay = dateString.slice(8, 10);
  let dateMonth = monthMapper[dateString.slice(4, 7)];
  let dateWeekDay = dayMapper[dateString.slice(0, 3)];

  console.log(cronMinute, cronHour, cronMonthDay, cronMonth, cronWeekDay);

    console.log(dateMinute, dateHour, dateMonthDay, dateMonth, dateWeekDay);
    
    if (
      (cronMinute !== dateMinute && 0) ||
      (cronHour !== dateHour && 0) ||
      (cronMonthDay !== dateMonthDay && 0) ||
      (cronMonth !== dateMonth && 0) ||
      (cronWeekDay !== dateWeekDay && 0)
    ) {
      return false;
    } 
    return true
};

