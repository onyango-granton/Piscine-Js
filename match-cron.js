const matchCron = function (cron, date) {
  const splittedCron = cron.split(" ");
  const cronMinute = splittedCron[0];
  const cronHour = splittedCron[1];
  const cronDayOfMonth = splittedCron[2];
  const cronMonth = splittedCron[3];
  const cronDayOfWeek = splittedCron[4];

  const dateMinute = date.getMinutes();
  const dateHour = date.getHours();
  const dateDayOfMonth = date.getDate();
  const dateMonth = date.getMonth() + 1; 
  const dateDayOfWeek = date.getDay() === 0 ? 7 : date.getDay();

  const matchField = (cronField, dateField) => {
    if (cronField === "*") return true;
    return parseInt(cronField, 10) === dateField;
  };

  return (
    matchField(cronMinute, dateMinute) &&
    matchField(cronHour, dateHour) &&
    matchField(cronDayOfMonth, dateDayOfMonth) &&
    matchField(cronMonth, dateMonth) &&
    matchField(cronDayOfWeek, dateDayOfWeek)
  );
};


