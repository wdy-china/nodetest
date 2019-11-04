//createReadtream     createWriteStream
//事件    data     end
//
var fs = require("fs")
var readStream=fs.createReadStream("./1.txt")
var length = 0
//探究数据流的过程   
//data - 当有数据可读时触发  监听输入数据                    
readStream.on("data",(chunks)=>{
    length++
    console.log(chunks.toString())
})
//end - 没有更多的数据可读时触发   完成数据读取
readStream.on("end",(chunks)=>{
    console.log(length)
})
