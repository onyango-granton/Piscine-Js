const vowels = /[aeiou]/g;
const vowelDots = function (string) {
  string = string.replace(vowels, (match) => match + ".");
  return string;
};
