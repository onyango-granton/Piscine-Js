import { readFile, writeFile } from "fs/promises";
import { argv } from "process";
import { Buffer } from "node:buffer";

let fileName = argv[2]

let decodeEncode = argv[3]

let newFileName = argv[4]

try {
    let content = await readFile(fileName, { encoding: "utf8" });
    if (decodeEncode == "encode") {
        let encodedContent = Buffer.from(content).toString('base64')
        newFileName == null ?
            await writeFile("cypher.txt", encodedContent) :
            await writeFile(newFileName, encodedContent)
    } else if (decodeEncode == "decode") {
        let decodedContent = Buffer.from(content, 'base64').toString("utf8")
        newFileName == null ?
            await writeFile('clear.txt', decodedContent) :
            await writeFile(newFileName, decodedContent)
    }
} catch (e) {
    console.log(e)
}