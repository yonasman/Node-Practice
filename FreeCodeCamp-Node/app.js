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
const fs = require("fs").promises;
const util = require("util");
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
readAndWrite("./hello.txt")

