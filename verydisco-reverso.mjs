import { argv } from "process";
import { readFile } from "fs/promises";

let fileName = argv[2]

try { 
    let content = await readFile(fileName, { encoding: "utf8" })

    let wordArr = []
    let splitWords = content.split(" ")
    splitWords.forEach((word) => {
        let midVal =
          word.length % 2 == 0
            ? Math.ceil(word.length / 2)
            : Math.ceil(word.length / 2) - 1;
        let partOne = word.slice(0, midVal)
        let partTwo = word.slice(midVal)
        let newWord = partTwo.concat(partOne)
        wordArr.push(newWord)
    })

    console.log(wordArr.join(" "))


} catch (e) {
    console.log(e)
}