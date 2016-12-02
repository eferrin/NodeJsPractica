
var http = require('http');
var port = 3000;
var fs = require('fs');
var url = require("url");

var server = http.createServer()

server.on("request", function(req,res){
  var urlData=url.parse(req.url);
  var path = urlData.pathname;
  if (path=="/"){
    path="/index.html";
  }
  var filePath= "public"+path;
  console.log(filePath);
  fs.exists(filePath,function(exists){
    if(exists){
      fs.readFile("public"+path, function(err,data){
        if (err){
          res.writeHead(500);
          res.end("Ha ocurrido algo malo")
        }else{
          res.end(data);
        }
      })
    }else {
      res.writeHead(404);
      res.end("No existe")
    }
  });
});

server.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
