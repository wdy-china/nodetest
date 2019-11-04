var http = require("http")
http.createServer(function(req,res){
    res.end("Holle Wrold!");
}).listen(3000,function(){
    console.log("服务端以挂起！")
})