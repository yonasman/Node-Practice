const express = require("express");
const app = express()
const authorize = require("./authorize")
const morgan = require("morgan");

// authorize user
// app.use(authorize)
// app.use(morgan("dev"))

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url,time);
    next();
}


app.get("/",(req,res) => {
    res.send("Home");
})
app.get("/ab",(req,res) => {
    res.send("About");
})

app.listen(4000,() => {
    console.log("listening to 4000")
})