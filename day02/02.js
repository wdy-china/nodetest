// for(var i =0;i<5;i++){
//     setTimeout(()=>{
//           console.log(i)
//      },0)
// }

function home(req,res){
    res.end("廖义勇")
}
function about(req,res){
    res.end("about")
}
function news(req,res){
    res.end("news")
}

exports.home = home
exports.about = about
exports.news = news