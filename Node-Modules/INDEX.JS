const http = require("http");
const fs = require("fs");
const path = require("path");
const mimeTypes = require("mime-types").lookup;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        req.url = "/index.html";
    }
    
    let filePath = path.join(__dirname, req.url);
    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 Not Found");
        } else {
            let mimeType = mimeTypes(filePath) || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content);cd 
        }
    });
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});
