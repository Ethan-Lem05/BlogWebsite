const http = require("http");

const server = http.createServer((req, res) => { // called when someone joins the server 
    console.log("request received");
});

server.listen(3000, 'localhost', () => {
    console.log("listening on port 3000");
});