const http = require("http");
const fs  = require("fs");
const _ = require("lodash")

const server = http.createServer((req,res) => {
    //lodash (a package of utilities for JS can be found at npm.js)

    const num = _.random(0,20);
    console.log(num);

    //variables 
    let path = "";
    //request properties ex req.url req.method (the type of request) etc.
    switch(req.url) {
        case "/": 
            path += "/home.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "/about.html";
            res.statuscode = 200;
            break;
        case "/about-me":
            res.setHeader("Location", "/about"); //redirects by resetting the page 
            break;
        default:
            path += "/404.html";
            res.statusCode = 404;
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