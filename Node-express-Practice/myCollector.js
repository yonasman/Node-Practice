// imported modules
const fs = require("fs");
const twoTimes = require("./myFirst")
const threeTimes = require("./mySecond")

// writing the results of myMultiplier function on a file
// const byTwoResult = twoTimes.myMultiplier(14)

// fs.writeFile("results.txt",`The result of 14 when passed to myMultiplier function in first.js is ${byTwoResult}.`,()=> {
//     console.log("File written successfully");
// })

// appending the result when 14 passed to mySecond.js multiplier function
const byThreeResult = threeTimes.myMultiplier(14)

fs.appendFile("results.txt",`\nThe result of 14 when passed to myMultiplier function in mySecond.js function is ${byThreeResult}.`,() => {
    console.log("File appended successfully");
})
