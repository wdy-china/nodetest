var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
http.createServer((req,res)=>{
    fs.readFile("./view/index.ejs",(err,data)=>{
        var template =data.toString()
        var list = ["vue","react","node"]
        var result = ejs.render(template,{list:list})
        res.end(result)
    })
}).listen(3000)
