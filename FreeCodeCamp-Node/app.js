function delay(sec) {
    let start = Date.now();
    let x = true
    while(x) {
        let current = Date.now();
        if(current - start >= sec * 1000) {
            console.log("Hi")
            x = false
        }
    }
}
// delay(10)
// ******* write a file
// const fs = require("fs");
// fs.writeFile("hello.txt","Hello everybody",(err) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log("Data written successfully");   
//     }
// })

const getText = (path) => {
    return new Promise((resolve,reject) => {
            fs.readFile(path,"utf-8",(err,data) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
    })
}
// getText("./hello.txt").then((data) => console.log(data)).catch((err) => console.log(err))

// async await
const getResult = async() => {
    try {
        const text = await getText("./hello.txt");
        console.log(text)
    } catch (error) {
        console.log(error)
    }

}
// getResult()
// using util for promise
// const fs = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);
const readAndWrite = async (path) => {
    try {
        const txt = await fs.readFile(path,"utf8")
        // await writeFilePromise("promise-write.txt","I am written from util promise")
        console.log(txt)
    } catch (error) {
        console.log(error)
    }
    
}
// readAndWrite("./hello.txt")
// event driven programming
const EventEmitter = require("events")
const emitter = new EventEmitter();

emitter.addListener("hi",()=>{
    console.log("Hi, how are you?")
})
// emitter.emit("hi")
// working with streams
// ********************************
// const {writeFileSync} = require("fs")
// for(i = 0;i < 1000;i++) {
//     writeFileSync("stream.txt",`Hello world ${i}\n`,{flag:'a'})
// }


// const {createReadStream} = require("fs")
// const stream = createReadStream("./stream.txt",{encoding:"utf8"})
// stream.on("data",(result)=>{
//     // console.log(result)
// })

// *******************
// send big data with sync
// const http = require("http")
// const fs = require("fs")
// const server = http.createServer((req,res) => {
//     const file = fs.readFileSync("./stream.txt","utf8");
//     res.end(file)
// })
// server.listen(5000,() => {
//     console.log("server is listening to 5000")
// })

// sending big data with stream
// const {createReadStream} = require("fs");
// const http = require("http");
// const server = http.createServer((req,res) => {
//     const file = createReadStream("./stream.txt","utf8");
//     file.on("open",() => {
//         file.pipe(res)
//     })
//     file.on("error",(error)=>{
//         res.end(error)
//         console.log("error:", error)
//     })
//     res.on("finish",()=> {
//         console.log("Sending Finished");
//     })
// })

// server.listen(5000,() => {
//     console.log("Server is listening to 5000")
// })

// *******************************
// creating server
const http = require("http");
const server = http.createServer((req,res) => {
    let url = req.url;
    if(url == "/") {
        res.writeHead(200,{"content-type" : "text/html"});
        res.write("<h1>Home page</h1>");
        res.end();
    } else if(url == "/about") {
        res.writeHead(200,{"content-type" : "text/html"});
        res.write("<h1>About page</h1>");
        res.end();
    } else {
        res.writeHead(404,{"content-type" : "text/html"});
        res.write("<h1>Page not Found</h1>");
        res.end();
    }
    
})
server.listen(5000,()=> {
    console.log("Listening to 5000")
})