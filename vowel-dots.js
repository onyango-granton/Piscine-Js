const vowels = /[aeiou]/g;
const vowelDots = function (string) {
  string = string.replace(charset, (match) => match + ".");
  return string;
};
