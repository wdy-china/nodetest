var http = require("http")

var url = require("url")

var fs = require("fs")

http.createServer((req,res)=>{
    res.writeHead("Content-type","text/html;charest=utf-8")
    if(req.url == "/favicon.ico"){
        return
    }
    var obj = url.parse(req.url,true).query
    res.end("接收到的username:" + obj.username)
}).listen(3000,function(){
    console.log("嘿嘿嘿~")
})