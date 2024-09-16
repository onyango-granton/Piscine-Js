import {argv} from 'node:process'

argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

let wordsToBeSplit = argv[2]

let splitWords = wordsToBeSplit.split(" ")

let reverseWordArr = []

splitWords.forEach((word) => {
    let splitIndex = Math.ceil(word.length / 2)
    let wordSlice1 = word.slice(0, splitIndex)
    let wordSlice2 = word.slice(splitIndex)
    let newWord = wordSlice2.concat(wordSlice1)
    reverseWordArr.push(newWord)
})

let newSentence = reverseWordArr.join(" ")

console.log(newSentence)