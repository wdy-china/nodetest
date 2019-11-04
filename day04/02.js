var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    res.send({"success":"get请求成功","data":[{"name":"tom"},{"age":"18"}]})
}).get("/list",(req,res)=>{
    res.send({"success":"get请求成功","data":[{"name":"jack"},{"age":"19"}]})
})
app.listen(3000)