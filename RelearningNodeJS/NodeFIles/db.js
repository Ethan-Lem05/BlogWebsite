const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const model = require("../models/blog");

const app = express();
const dbURI = "mongodb+srv://skullerboy88:s76w58uv@cluster0.tcowpev.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI) // usea connection url to connect to a database
.then((result) => { //returns a promise since this is asyncronous -> fire a call back function that connects t the server once db is connected
    console.log("conected to database");
    app.listen(3000, "localhost");
})
.catch((err) => //catch if an error occurs  
{ console.log(err)}
);

app.set("view engine", "ejs");
app.set("views", "RelearningNodeJS/views");


//middleware is just code that runs between the request and the response

/** 
app.use((req,res, next) => {
    console.log("new request has been made");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method); 
    next();
});
app.use((req,res,next) => {
    console.log("In the next middleware");
    next();
}) 
*/



//middleware
app.use(morgan("dev")); // morgan is a 3rd party middleware that allows us to log our requests
app.use(express.static("RelearningNodeJS/public")); // express.static is abuilt in middleware function that allows us to send a static file folder regardless of the request type

app.get("/add-blog", (req,res) => {
    const blog = new model({title: "New blog", snippet: "New blog snippet", body: "New blog boddy"});
    blog.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

app.get("/", (req,res) => {
    //res.send("<p> home page </p>"); //writes and ends the response
    //res.sendFile("/views/home.html", {root: "./RelearningNodeJS"}); // responds with a file and ends the response 

    const blogs = [
        {title: "First blog", snippet: "dshgsdljk hfkjdf"},
        {title: "second blog", snippet: "kdaghskjdhfjkashd ksadjfhsd"},
        {title: "third blog", snippet: "asdfahdk akdjfh sadkfjh"}
    ];
 -vcsz
    res.render("index", {title: "home", blogs: blogs}); // renders a view for dynamic data 
});

app.get("/hello", (req,res) => {
    res.send("Hello world");
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


//handles 404 if none of the above get handlers are called -> middleware  
app.use((req,res) => {
    //res.status(404).sendFile("/views/404.html", {root: "./RelearningNodeJS"}); // status function returns the response object and changes status
    res.status(404).render("404");
});

//get handlers only get called 
