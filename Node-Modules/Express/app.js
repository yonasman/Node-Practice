const express = require("express");
const app = express();
app.listen(4000, ()=> {
    console.log("Listening to port 4000")
})

// app.use(express.static("static"))
// console.log("Hello World")