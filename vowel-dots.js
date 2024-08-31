const vowels = /[aeiouAEIOU]/g;
const vowelDots = function (string) {
  string = string.replace(vowels, (match) => match + ".");
  return string;
};


// console.log(vowelDots("something"));