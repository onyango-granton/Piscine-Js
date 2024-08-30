const round = function (data) {
  let sign = false;
  if (data < 0) {
    data *= -1;
    sign = !sign;
  }
  let num = 0;
  for (; num < data - 1; num++) {}
  data - num >= 0.5 ? num++ : num;
  if (sign) {
    return -num;
  } else {
    return num;
  }
};

const ceil = function (data) {
  let sign = false;
  if (data < 0) {
    data *= -1;
    sign = !sign;
  }
  let num = 0;
  for (; num < data; num++) {}
  if (sign) {
    num--;
    return -num;
  } else {
    return num;
  }
};

const floor = function (data) {
  let num = ceil(data);
  if (num < 0) {
    num--;
    return num;
  } else {
    num--;
    return num;
  }
};

const trunc = function (data) {
  let sign = false;
  if (data < 0) {
    sign = !sign;
    data *= -1;
  }
  let bigInt = false;
  if (data > 0xfffffffff) {
    bigInt = !bigInt;
    data -= 0xfffffffff;
  }
  let num = 0;
  for (; num < data - 1; num++) {}
  bigInt ? num + 0xfffffffff : num;
  if (sign) {
    return -num;
  } else {
    return num;
  }
};
