function firstDayWeek(week, year) {
  if (week === 1) {
    return `01-01-${year}`;
  }

  let fullYear = parseInt(year, 10);

  let startOfYear = new Date(fullYear, 0, 1);

  let firstDayOfWeek = new Date(startOfYear);
  firstDayOfWeek.setDate(firstDayOfWeek.getDate() + (week - 1) * 7);

  let dayOfWeek = firstDayOfWeek.getDay();
  if (dayOfWeek === 0) {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 6);
  } else {
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - (dayOfWeek - 1));
  }

  let day = String(firstDayOfWeek.getDate()).padStart(2, "0");
  let month = String(firstDayOfWeek.getMonth() + 1).padStart(2, "0");
  let formattedYear = String(firstDayOfWeek.getFullYear());

  if (formattedYear !== year) {
    let date = Number(day) + 1;
    let dateStr = "";
    date < 10 ? (dateStr = "0" + date.toString()) : date.toString();
    return `${dateStr}-${month}-${year}`;
  }

  return `${day}-${month}-${formattedYear}`;
}
