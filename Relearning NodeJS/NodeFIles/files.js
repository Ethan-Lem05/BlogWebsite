const fs = require("fs");

 //reading files
 fs.readFile("./TextFiles/Blog1.txt", (err, data) => {
    if(err) console.log(err);
    console.log(data.toString());
 })