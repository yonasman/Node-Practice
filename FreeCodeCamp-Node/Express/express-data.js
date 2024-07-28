const express = require("express");
const router = require("./routers/people");

// console.log(people)
const app = express();
app.use(express.urlencoded({extended:false}))
app.use("/api/people",router);


// listen
app.listen(4000,() => {
    console.log("Listening to 4000")
})