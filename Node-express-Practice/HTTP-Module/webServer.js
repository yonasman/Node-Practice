const http = require("http")
const {random} = require("./randomNumber")

const server = http.createServer((req,res)=>{
    res.end(`The random number generated now is ${random()}`)
})
server.listen(1234,()=>{
    console.log("Listening to port 1234")
})