const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

//  Ignore favicon requests before logging
if(parsedUrl.pathname === "/favicon.ico") return res.end();

// Log only real requests
const log = `${Date.now()} : ${parsedUrl.pathname} New Request\n`;
fs.appendFileSync("log.txt", log);

    // Routing
    switch(parsedUrl.pathname){
        case "/":
            res.end("Welcome to Home Page!");
            break;
        case "/about":
            const name = parsedUrl.query.name || "Guest";
            res.end(`Hello ${name}, this is About Page!`);
            break;
        case "/contact":
            res.end("This is Contact Page!");
            break;
        default:
            res.end("404 Page Not Found");
    }
});

server.listen(port, () => console.log(`Server started on ${port}`));
