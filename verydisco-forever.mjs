import { argv } from "node:process";
import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

let wordsToBeSplit = argv[2];

let splitWords = wordsToBeSplit.split(" ");

let reverseWordArr = [];

splitWords.forEach((word) => {
  let splitIndex = Math.ceil(word.length / 2);
  let wordSlice1 = word.slice(0, splitIndex);
  let wordSlice2 = word.slice(splitIndex);
  let newWord = wordSlice2.concat(wordSlice1);
  reverseWordArr.push(newWord);
});

let newSentence = reverseWordArr.join(" ");

//console.log(newSentence);

try {
    let fileData = new Uint8Array(Buffer.from(newSentence))
    await writeFile("verydisco-forever.txt", fileData);

} catch (e) {
    console.log(e)
}
