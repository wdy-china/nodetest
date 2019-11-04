var express = require("express")
var app=express()
var art=require("express-art-template")
app.engine("html",art)
app.get("/",(req,res)=>{
    var list=["jack","tom","rose"]
    res.render("home.html",{list:list})
})
app.listen(3000)