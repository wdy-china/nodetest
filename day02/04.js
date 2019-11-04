var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    //读文件
    // fs.readFile('../day01/01.txt',(err,data)=>{
    //     res.end(data)
    // })

    //写文件  替换文件
    // fs.writeFile("../day01/01.txt","jskjahska",(err,data)=>{
    //     if (err) {
    //         throw err
    //     }
    //     res.end("success")
    // })

    //写文件    添加文件
    // fs.appendFile("../day01/01.txt","aksjdaka",(err)=>{
    //     if (err) {
    //         throw err
    //     }
    //     res.end("appendFile is success")
    // })

    //创建目录
    // fs.mkdir("./aa",(err)=>{
    //     if (err) {
    //         throw err
    //     }
    //     res.end("mkdir is success")
    // })

    //删除目录
    // fs.rmdir("./aa",(err)=>{
    //     if (err) {
    //         throw err
    //     }
    //     res.end("rmdir is success")
    // })

    //目录重命名
    fs.rename("../day01/01.txt","../day01/02.txt",(err)=>{
        if (err) {
            throw err
        }
        res.end("success")
    })
}).listen(3000)