const express = require("express");
const path = require("path");

const app = express();

// // get request
// app.get("/",(req,res) => {
//     res.status(200).send("Home Page");
// })
// app.all("*",(req,res) => {
//     res.status(404).send("<h1>Not Found</h1>")
// })
const filePath = path.resolve(__dirname,"../Server/index.html")
// serving static file
app.use(express.static("../Server"))

// listen to port
app.listen(3000,() => {
    console.log("Listening to port 3000")
})