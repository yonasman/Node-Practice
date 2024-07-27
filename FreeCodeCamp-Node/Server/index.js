const http = require("http");
const fs = require("fs");
const path = require("path")
const mime = require("mime-types");
// get the root path
const rootPath = path.resolve(__dirname);

const server = http.createServer((req, res) => {
    const url = req.url;
    const filePath = path.join(rootPath,url === "/" ? "index.html" : url);
    
    const extname = path.extname(filePath);
    const contentType = mime.lookup(extname) || 'application/octet-stream';
    // Determine the content type
    // let contentType = "text/plain";
    // if(filePath.endsWith(".html")) {
    //     contentType = "text/html"
    // } else if(filePath.endsWith(".css")) {
    //     contentType = "text/css"
    // }
        fs.readFile(path.join(filePath), "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return;
            }

            console.log("File read successfully");
            res.writeHead(200, { "content-type": contentType});
            res.end(data);
        });
    } )

// listening to the server
server.listen(5000,()=>{
    console.log("Listening to port 5000")
})
