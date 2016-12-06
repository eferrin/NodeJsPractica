
var http = require('http');
var port = 3000;
var fs = require('fs');
var url = require("url");
var visitas= require("./app/visitas");
var noticias= require("./app/noticias");
var express = require('express');
var app=express();
var mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());


app.set('view engine', 'mustache');
app.set('views', './views');

noticias.cargar();


app.get("/index", function(req,res){
  var articulos=noticias.get();
  console.log(articulos);
  res.render('layouts/index', {titulo: "TestNews",'articulos': articulos});
});

app.get("/", function(req, res){
  visitas.cargarIP(req.ip);
  var articulos=noticias.get();

  res.render('layouts/index', {'title': "TestNews", 'articulos': articulos});
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

app.get("/noticia/:id", function(req, res){
  var noticia=noticias.getbyId(req.params.id);
  //console.log(req.params.id);
  //console.log(noticias.get());
  //console.log(noticia);
  res.render('layouts/noticia',{'title': "Noticia", 'articulo': noticia});
});


app.use(express.static('public'));

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
