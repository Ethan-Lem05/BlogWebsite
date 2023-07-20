const http = require("http");
const fs  = require("fs");

const server = http.createServer((req,res) => {
    //request properties
    console.log(req.url, req.method);
    //response properties
    res.setHeader("Content-Type", "text/html") // text/plain returns plain text, text/html returns html 
    fs.readFile("./views/Home.html", (err,data) => {
        if(err) {
            console.log(err);
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000,"localhost", () => {
    console.log("listening on port 3000");
})