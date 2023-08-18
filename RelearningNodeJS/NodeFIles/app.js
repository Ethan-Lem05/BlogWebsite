const express = require("express");  
//express creates APIs that allow someone to access  

const app = express(); // starts a server


//listen for requests
app.listen(3000, "localhost");

app.get("/", (req,res) => {
    //res.send("<p> home page </p>"); //writes and ends the response
    res.sendFile("/views/home.html", {root: "./RelearningNodeJS"});
});

app.get("/about", (req,res) => {
    res.send("<p> about page </p>");
})

app.get("/about-us", (req,res) => { // routing from about-us to about
    res.redirect("/about");
} ) 

app.use((req,res) => {
    res.status(404).sendFile("/views/404.html", {root: "./RelearningNodeJS"}); // status function returns the response object and changes status
});

//view engines are templates that allow us to send dynamic data to a website