const http = require('http');
const url = require('url');


http.createServer(function (req, res) {
    let urlParse = url.parse(req.url);
    // console.log(urlParse);
    console.log(urlParse.pathname);
    if (req.method === 'GET') {
        switch (urlParse.pathname){
            case "/":
                homepage(req, res);
                break;
            case "/about":
                about(req, res);
                break;
            default:
                page404(req, res);
                break;
        }
    }
    else if (req.method === 'POST') {
        switch (urlParse.pathname) {
            case "/about":
                about_post(req, res);
                break;
            default:
                page404(req, res);
                break;
        }
    }
}).listen(3000);

console.log("Server running at http://localhost:3000");

function homepage(req, res) {
    res.end("Hello, world!");
}

function about(req, res) {
    res.end("about page");
}

function about_post(req, res) {
    res.end("about page with post");
}

function page404(req, res) {
    res.end("404 not found");
}