var querystring = require("querystring")

// var obj = querystring.parse("name=tom&sex=0&id-1")
var obj = querystring.stringify({ name: 'tom', sex: '0', 'id-1': '' })
console.log(obj)