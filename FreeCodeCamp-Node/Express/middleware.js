const express = require("express");
const app = express()
const authorize = require("./authorize")
// authorize user
// app.use(authorize)

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url,time);
    next();
}


app.get("/",logger,(req,res) => {
    res.send("Home");
})
app.get("/about",authorize,(req,res) => {
    res.send("About");
})

app.listen(4000,() => {
    console.log("listening to 4000")
})