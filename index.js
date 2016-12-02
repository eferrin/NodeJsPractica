
var http = require('http');
var port = 3000;
var fs = require('fs');
var url = require("url");
var visitas= require("./app/visitas")

var server = http.createServer()

server.on("request", function(req,res){
  var urlData=url.parse(req.url);
  var path = urlData.pathname;
  visitas.cargarIP(req.connection.remoteAddress);
  if (path=="/"){
    path="/index.html";

  }
  if (path=="/stats"){
    res.writeHead(200);
    res.end(visitas.get());
  }else{
    var filePath= "public"+path;
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

  }
});

server.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
