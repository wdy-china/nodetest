//监听日志    readline

var fs = require("fs")
var readline = require("readline")
var readStream=fs.createReadStream("./1.txt")
console.log(readStream)
var rl = readline.createInterface({
        //监听输入数据
    input:readStream
})
//日志执行事件
rl.on("line",(linenum)=>{
    console.log(linenum)
    console.log("linenum执行")
})
//日志读取完成关闭
rl.on("close",()=>{
    console.log("事件监听完毕")
})