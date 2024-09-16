import { argv } from "process";
import { readdir } from "fs/promises";

let directory = argv[2]

directory == null ? directory = "./guests" : null

try {
    let guests = await readdir(directory)

    let newNameArr = []

    let guestNum = 0

    await guests.forEach(guest => {
        //console.log(typeof (guest))
        
        let guestNames = guest.slice(0, -5).split("_")
        let firstName = guestNames[0]
        let lastName = guestNames[1]
        let newNames = lastName + " " + firstName
        newNameArr.push(newNames)
        //console.log(newNames)
    })

    //console.log(newNameArr)
    let sortedArr = await newNameArr.sort()

    await sortedArr.forEach(entry => {
        guestNum++;
        console.log(`${guestNum} ${entry}`)
    })

    

    
} catch (e) {
    console.log(e)
}