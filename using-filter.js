const filterShortStateName = function (stringArray) {
    return stringArray.filter((x) => x.length < 7)
}

const filterStartVowel = function (stringArray) {
    const pattern = /^[aeiou]/i;
    return stringArray.filter((x) => pattern.test(x));
};

const filter5Vowels = function (stringArray) {
  const pattern = /[aeiou]/ig; // 'g' for global match, 'i' for case-insensitive

  return stringArray.filter((x) => {
    const matches = x.match(pattern);
    return matches && matches.length > 4;
  });
};

const filter1DistinctVowel = function (stringArray) {
    const pattern = /[aeiou]/gi;
    return stringArray.filter((x) => {
        const matchArr = x.toLowerCase().match(pattern)
        const matchSize = new Set(matchArr)
        return matchSize.size == 1
   }) 
}

const multiFilter = function (objectArray) {
    return objectArray.filter((x) => {
        const capitalTrue = x.capital.length > 7
        const nameTrue = /^[^aeiou]/i.test(x.name)
        const tagTrue = x.tag.match(/[aeiou]/ig) && x.tag.match(/[aeiou]/ig).length > 0;
        const regionTrue = x.reigion !== 'South'
        console.log(capitalTrue,nameTrue,tagTrue,regionTrue)
        return capitalTrue && nameTrue && tagTrue && regionTrue
    })
}

