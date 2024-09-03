const isValid = function (arg) {
  if (typeof arg === "number" && Number.isNaN(arg)) {
    return false;
  }
  return !(arg == "Invalid Date") && typeof arg !== "string";
};

const isAfter = (arg1, arg2) => arg1 > arg2;

const isBefore = (arg1, arg2) => arg2 > arg1;

const isFuture = (arg1) => arg1 > Date.now();

const isPast = (arg1) => arg1 < Date.now();
