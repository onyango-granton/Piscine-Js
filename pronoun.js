const regexPronoun = /i\s+|you\s+|he\s+|she\s+|it\s+|they\s+|we\s+/i;

function pronoun(string) {
  const result = {};
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    const match = regexPronoun.exec(words[i]+" ");
      if (match && !regexPronoun.exec(words[i + 1] + " ") && !words[i + 1] == "") {
        //console.log(match);
        const pronoun = match[0].trim();
        const nextWord = words[i + 1] || ""; 
        result[pronoun] = result[pronoun] || { word: [], count: 0 };
        result[pronoun].word.push(nextWord);
        result[pronoun].count++;
      }
  }

  return result;
}

const ex = 'Using Array Destructuring, you you can iterate through objects easily.'
console.log(pronoun(ex))


const ex2 = 'If he you want to buy something you have to pay.'

console.log(pronoun(ex2))