var http = require("http")
var form = require("formidable")
var fs = require("fs")
var path = require("path")
var sd = require("silly-datetime")
// console.log(form)
http.createServer((req,res)=>{
    // if (req.url =="/favicon.ico") {
    //     return
    // }
    if (req.url=="/dopost") {
        var fm = form.IncomingForm()
        fm.uploadDir="./upload"
        fm.parse(req,function(err,fields,files){
            var low=files.pic.path
            var extname=path.extname(files.pic.name)
            var time=sd.format(new Date(),"YYYYMMDDDHHHmmss")
            var fanishon="./upload/" + time + extname
            fs.rename(low,fanishon,(err)=>{
                if (err) {
                   throw err
                }
            })
            res.end("success")
            console.log(fanishon)
        })
    }
}).listen(3000)