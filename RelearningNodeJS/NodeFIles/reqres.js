const http = require("http");
const fs  = require("fs");

const server = http.createServer((req,res) => {
    //variables 
    let path = "";
    //request properties ex req.url req.method (the type of request) etc.
    switch(req.url) {
        case "/": 
            path += "/home.html";
        case "/404":
            path += "404.html";
            break;
        case "/about":
            path += "/about.html";
            break;
        
    }
    //response properties
    res.setHeader("Content-Type", "text/html") // text/plain returns plain text, text/html returns html 
    fs.readFile("./RelearningNodeJS/views" + path, (err,data) => {
        if(err) {
            console.log(err);
            res.end();
            return;
        }
        res.write(data); //writes data to the response object
        res.end();//sends the response 
    });
});

server.listen(3000,"localhost", () => {
    console.log("listening on port 3000");
})