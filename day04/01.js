var http = require("http")
var fs = require("fs")
var art = require("art-template")
// console.log(artTemplate)
http.createServer((req,res)=>{
    fs.readFile("./staic/01.art",(err,data)=>{
        var template = data.toString()
        var list = ["jack","tom","rose"]
        var htmlDate = art.render(template,{list:list})
        res.end(htmlDate)
    })
}).listen(3000)