const regexPronoun =
  /\s+i\s+|\s+you\s+|\s+he\s+|\s+she\s+|\s+it\s+|\s+they\s+|\s+we\s+/i;

function pronoun(string) {
  let arr = [];
  const result = {};
  let words = string.split(" ");
  words.forEach((element) => {
    if (element.includes("\n")) {
      let newWords = element.split("\n");
      arr = arr.concat(newWords);
    } else {
      arr.push(element);
    }
  });

  words = arr;

  arr = [];

  words.forEach((word) => {
    word = word.toLowerCase();
    arr.push(word);
  });

  words = arr;

  for (let i = 0; i < words.length; i++) {
    const match = regexPronoun.exec(" " + words[i] + " ");

    if (match) {
      const pronoun = match[0].trim();
      const nextWord = words[i + 1];
      if (nextWord == undefined) {
        result[pronoun] = { word: [], count: 0 };
      } else {
        result[pronoun] = result[pronoun] || { word: [], count: 0 };
        if (!regexPronoun.exec(" " + words[i + 1] + " ")) {
          result[pronoun].word.push(nextWord);
        }
      }

      result[pronoun].count++;
    }
  }

  return result;
}
