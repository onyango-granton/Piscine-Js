import { argv } from "process";
import { readdir } from "fs/promises";


let directory = argv[2]

try {
    let fileCount = 0
    directory == null ? directory = "." : null
    let files = await readdir(directory)
    files.forEach(file => fileCount++)
    console.log(fileCount)

} catch (e) {
    console.log(e)
}
