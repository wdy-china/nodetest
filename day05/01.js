var express = require("express")
var path = require("path")

var app = express()

var static=path.resolve(__dirname,"public")
app.use(express.static(static))

app.get("/",(req,res)=>{
    console.log(req)
    res.send("臭弟弟来了！")
})
app.listen(1000)