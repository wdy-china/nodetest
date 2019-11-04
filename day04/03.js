//接收get传输的参数
var express = require("express")

var app = express()
app.get("/",(req,res)=>{
    res.send("默认请求")
})
app.get("/list",(req,res)=>{
    console.log("接收的参数为:"+req.query.username)
    res.send({"data":"接收的id为:"+req.query.username})
})
app.get("/getid/:id",(req,res)=>{
    console.log("接收的参数为:"+req.params.id)
    res.send({"data":"接收的id为:"+req.params.id})
})
app.listen(3000)