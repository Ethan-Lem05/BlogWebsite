const express = require("express");  
//express creates APIs that allow someone to access the sever

const app = express(); // starts a server

app.set("view engine", "ejs"); // sets up a view engine and allows you to send dynamic data to a website
app.set("views", "RelearningNodeJS/views");


//listen for requests
app.listen(3000, "localhost");

app.get("/", (req,res) => {
    //res.send("<p> home page </p>"); //writes and ends the response
    //res.sendFile("/views/home.html", {root: "./RelearningNodeJS"}); // responds with a file and ends the response 

    const blogs = [
        {title: "First blog", snippet: "dshgsdljk hfkjdf"},
        {title: "second blog", snippet: "kdaghskjdhfjkashd ksadjfhsd"},
        {title: "third blog", snippet: "asdfahdk akdjfh sadkfjh"}
    ];

    res.render("index", {title: "home", blogs: blogs}); // renders a view for dynamic data 
});

app.get("/about", (req,res) => {
    //res.send("<p> about page </p>");
    res.render("about", { title: "about" });
})

app.get("/about-us", (req,res) => { // routing from about-us to about
    res.redirect("/about");
} ) 

app.get("/create", (req,res) => {
    res.render("create.ejs", { title: "create" })
});

app.use((req,res) => {
    //res.status(404).sendFile("/views/404.html", {root: "./RelearningNodeJS"}); // status function returns the response object and changes status
    res.status("404").render("404");
});

//view engines are templates that allow us to send dynamic data to a website

//partials allow us to make certain parts of a template more modular