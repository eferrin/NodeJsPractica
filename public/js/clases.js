
// manejador de articulos
//cargar 3 articulos en memoria
var ManejadorArticulos={};

ManejadorArticulos.load=function() {
  this.articulos=[];

  this.articulos.push(new Articulo("1", "Titulo 1", "Contenido 1"));
  this.articulos.push(new Articulo("2", "Titulo 2", "Contenido 2"));
  this.articulos.push(new Articulo("3", "Titulo 3", "Contenido 3"));
};

//cargar elemento ej articulo
ManejadorArticulos.render=function (objectId){

  var resultado = "";

  for (var i=0; i<this.articulos.length;i++){
    resultado+=this.articulos[i].render();
  }
  document.getElementById(objectId).innerHTML=resultado;
}

//articulos
var Articulo = function(id, titulo, contenido){
  this.id=id;
  this.titulo=titulo;
  this.contenido=contenido;

}

// devolver ek html del articulo
Articulo.prototype.render=function(){
  return '<article><div class= "titulo" ><h1><a data-id-noticia="'+this.id+'" href="noticia.html?id='+this.id+'">'+this.titulo+'</a></h1></div><div><p>'+this.contenido+'</p></div></article>'
}
