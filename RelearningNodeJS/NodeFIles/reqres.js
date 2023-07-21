const http = require("http");
const fs  = require("fs");

const server = http.createServer((req,res) => {
    //variables 
    let path = "./views";
    //request properties ex req.url req.method (the type of request) etc.
    switch(req.url) {
        case "/": 
            path += home;
        case "404":
            path += 404;
            break;
        case "about":
            path += about;
            break;
    }
    //response properties
    res.setHeader("Content-Type", "text/html") // text/plain returns plain text, text/html returns html 
    fs.readFile("./views/Home.html", (err,data) => {
        if(err) {
            console.log(err);
            res.end();
            return;
        }
        res.write(data);
        res.end();
    });
});

server.listen(3000,"localhost", () => {
    console.log("listening on port 3000");
})