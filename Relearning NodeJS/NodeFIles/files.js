const fs = require("fs");

 //reading files
 fs.readFile("./TextFiles/Blog1.txt", (err, data) => { // first arg is file name, second is callback function
    if(err) console.log(err);
    console.log(data.toString());
 })
 //writing files 
 fs.writeFile("./TextFiles/Blog1.txt", "hello world", (err) => { // 1. file name 2. text to write 3. call back function
    if(err) console.log(err);
 })
 //directories
 if(!fs.existsSync("./assets")){ // check if file exists 
    fs.mkdir("./assets", (err) => { // creates directory named assets
        if(err) console.log(err);
    });
}
 //deleting directories
 else {
    fs.rmdir("./assets", (err) => {
        if(err) console.log(err);
    }); // removes directory 
 }
//deleting files 

//create the file first 
fs.writeFile("./TextFiles/DeleteMe.txt", "To be deleted", (err) => {
    if(err) console.log(err);
})
setTimeout(() => {
    if(fs.existsSync("./TextFiles/DeleteMe.txt")) {
    fs.unlink("./TextFiles/DeleteMe.txt", (err) => {
        if(err) console.log(err);
        });
    }}, 3000); //wait
//then delete it 
