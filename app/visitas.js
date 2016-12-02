var ips;
var visitas;
var ManejadorVisitas={}
module.exports={
  cargarIP: function(ip){
    if (ips==undefined){
      ips=[];
      visitas=0;
    }
      visitas++;
      var existe=false;
      for (i=0;i<ips.length ;i++){
        if(ips[i]==ip){
          existe =true;
        }
      }
      if (!existe){
        ips.push(ip);
      }
  },
  get: function(){
    var miObjeto=new Object();
    miObjeto.visitas=visitas;
    miObjeto.ips=ips;

    return JSON.stringify(miObjeto);
  }
}
