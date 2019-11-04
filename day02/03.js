var http = require("http")
var fs = require("fs")

var router = require("./02")
http.createServer((req,res)=>{
    
    switch (req.url) {
        case "/":
            res.end(router.home(req,res))
            break;
        case "/about":
            res.end(router.about(req,res))
            break;  
        case "/news":
             res.end(router.news(req,res))
            break;   
        default:
            res.end("404")
            break;
    }
}).listen(3000)