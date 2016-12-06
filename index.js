
var http = require('http');
var port = 3000;
var fs = require('fs');
var url = require("url");
var visitas= require("./app/visitas")
var express = require('express')
var app=express();
//app.use(express.staticProvider(__dirname + '/public'));
app.use(express.static('public'));
app.get("/index", function(req,res){
  res.render('index.html');
});

app.get("/", function(req, res){
  visitas.cargarIP(req.ip);
  res.render('index.html');
});

app.get("/stats", function(req, res){
  if (req.query.usuario=="ADMIN" && req.query.password=="ADMIN"){
    res.writeHead(200);
    res.end(visitas.get());
  }else{
    res.writeHead(404);
    res.end("No tiene permisos");
  }
});

app.get("/noticias", function(req, res){

  res.render('noticia.html');
});

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
