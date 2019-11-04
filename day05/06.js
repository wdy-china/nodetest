var express = require("express")
var app = express()
var router=express.Router()
app.use(router)
router.get("/",(req,res)=>{
    res.send("router")
})
router.get("/ban",(req,res)=>{
    var num=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var result = ""
    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789876543210qwertyuioplkjhgfdsazxcvbnm0123456789"
    for(var i=0;i<4;i++){
        result+=str[num(0,str.length-1)]
    }
    console.log(result)
    res.send({"success":"请求成功","data":result})
})
app.listen(3000)