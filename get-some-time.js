const firstDayWeek = function ({ number, string }) {
  const firstDate = new Date(string, 0, 1);

  const daysElapsed = number * 7 * 1000 * 60 * 60 * 24;

  let endDate = firstDate.getTime() + daysElapsed;

  let newDateString = new Date(endDate).toString();

  let Days = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };

  let Month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  overLapsedDays = newDateString.slice(0, 3);

  let endDateMon = endDate - Days[overLapsedDays] * 1000 * 60 * 60 * 24;

  endDateMon = new Date(endDateMon).toString();

  let endDateMonArr = endDateMon.split(" ");

  return (
    endDateMonArr[2] + "-" + Month[endDateMonArr[1]] + "-" + endDateMonArr[3]
  );
};

