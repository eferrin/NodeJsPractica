var articulos;

module.exports={
  cargar: function(){
    articulos= [];
    var noticia= new Object();
    noticia.id='1';
    noticia.titulo="titulo 1";
    noticia.contenido="contenido 1";
    articulos.push(noticia);
  },
  get:function(){
    return articulos;
  },
  getbyId: function(id){

    for ( i=0; i<articulos.length;i++){
      
      if(articulos[i].id==id){
        resultado= new Object();
        resultado.titulo=articulos[i].titulo;
        resultado.contenido=articulos[i].contenido;
        return resultado;
      }
    }
    return "no se encontro el articulo";
  }
}
