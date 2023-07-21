const fs = require("fs")

const readstream = fs.createReadStream("./TextFiles/Blog2.txt");
const writestream = fs.createWriteStream("./TextFiles/Blog3.txt");

if(fs.existsSync("./TextFiles/Blog3.txt")) {
    fs.unlink("./TextFiles/Blog3.txt", () => {
        console.log("erased Blog3.txt")
    });
}
else {
    readstream.on('data', (chunk) => {
        console.log("------ NEW CHUNK ------");
        console.log(chunk.toString());
        writestream.write("------ NEW CHUNK ------");
        writestream.write(chunk);
    })
}

 