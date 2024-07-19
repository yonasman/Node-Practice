// os
const os = require("os");

const osInfo = {
    user : os.userInfo(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
// console.log(os.totalmem())
// console.log(osInfo)

// path
const path = require("path");
// console.log(path.sep)
const filePath = path.join("/content","file","note.txt")
// console.log(filePath)
// console.log(path.basename(filePath))

// http
const http = require("http");
const server = http.createServer((req,res)=> {
    res.write("Welcome to our page!");
    console.log(req.url)
    res.end();
})
server.listen(1000,()=> {
    console.log("Listening to 1000 port")
})