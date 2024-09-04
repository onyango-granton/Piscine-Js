function format(date, formatString) {
  const map = {
    y: Math.abs(date.getFullYear()),
    yyyy: String(Math.abs(date.getFullYear())).padStart(4,"0"),
    G: date.getFullYear() > 0 ? "AD" : "BC", 
    GGGG: date.getFullYear() > 0 ? "Anno Domini" : "Before Christ", 
    M: date.getMonth() + 1,
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    MMM: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date),
    MMMM: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    d: date.getDate(),
    dd: String(date.getDate()).padStart(2, "0"),
    E: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date),
    EEEE: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date),
    h: date.getHours() % 12 || 12,
    hh: String(date.getHours() % 12 || 12).padStart(2, "0"),
    m: date.getMinutes(),
    mm: String(date.getMinutes()).padStart(2, "0"),
    s: date.getSeconds(),
    ss: String(date.getSeconds()).padStart(2, "0"),
    H: date.getHours(),
    HH: String(date.getHours()).padStart(2, "0"),
    a: date.getHours() >= 12 ? "PM" : "AM",
  };

  return formatString.replace(
    /yyyy|yyy|yy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|mm|m|ss|s|HH|H|a/g,
    (match) => map[match]
  );
}

