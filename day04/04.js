//接收post传输数据
//中间件  body-parser   第三方
var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    console.log(req.body)
    res.send({"data":"接受的post的数据为:"+ req.body.username})
})
app.listen(3000)