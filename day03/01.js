var http = require("http")
var fs = require("fs")
var data = ""
http.createServer((req,res)=>{
    //普通获取数据的方式
    // fs.readFile("./1.txt",(err,data)=>{
    //     console.log(data)
    //     res.end(data)
    // })

    //通过流的方式去获取数据
    var readStream = fs.createReadStream("./2.txt")
    var writeStream = fs.createWriteStream("./3.txt")
    readStream.pipe()
    console.log("代码执行完毕")
    res.end()
}).listen(3000)
    