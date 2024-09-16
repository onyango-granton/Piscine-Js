import { argv } from "process";
import { readdir, readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

let directory = argv[2]

directory == null ? directory = "./guests" : null

try {
    let files = await readdir(directory)

    let vipGuestList = []

    for (let file of files) {
      let content = await readFile(`${directory}/${file}`, {
        encoding: "utf8",
      });
      let obj = JSON.parse(content);

      if (obj.answer === "yes") {
        vipGuestList.push(file.slice(0, -5)); // Assuming ".json" extension, using -5 instead of -4
      }
    }

    //console.log(vipGuestList);

    let orderedGuestList = []

    for (let guest of vipGuestList) {
        let splitGuestName = guest.split("_")
        let newGuestName = splitGuestName[1] + " " + splitGuestName[0]
        orderedGuestList.push(newGuestName)
    }

    orderedGuestList = orderedGuestList.sort()

    let filedata = ""

    for (let i = 0; i < orderedGuestList.length; i++){
        if (i == orderedGuestList.length - 1) {
            filedata += `${i+1}. ${orderedGuestList[i]}`
        } else {
            filedata += `${i + 1}. ${orderedGuestList[i]}` + "\n";
        }
    }

    //console.log(filedata)

    let fileData = new Uint8Array(Buffer.from(filedata))
    await writeFile("vip.txt",fileData)
    //await console.log(vipGuestList)
    

} catch (e) {
    console.log(e)
}