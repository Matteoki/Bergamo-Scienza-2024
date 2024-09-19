var x=0

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  clear(ev.target.id);
  ev.target.appendChild(document.getElementById(data));
}

function clear(elementID){
  document.getElementById(elementID).innerHTML = "";
}

function controllaVittoria(){

  var oCpu_placeID=document.querySelector("#cpu_place"), oCpuID = oCpu_placeID.querySelector("#cpu"), oGpu_placeID=document.querySelector("#gpu_place"), 
  oGpuID= oGpu_placeID.querySelector("#gpu"), oRam_placeID=document.querySelector("#ram_place"), oRamID= oRam_placeID.querySelector("#ram"), oCpuCooler_placeID=document.querySelector("#cpuCooler_place"), oCpuCoolerID= oCpuCooler_placeID.querySelector("#cpuCooler");

  if(oCpuID!=null && oCpuCoolerID!=null && oRamID!=null && oGpuID!=null){
    if((oCpu_placeID.id == (oCpuID.id+"_place")) && (oCpuCooler_placeID.id == (oCpuCoolerID.id+"_place")) && (oGpu_placeID.id == (oGpuID.id+"_place")) && (oRam_placeID.id == (oRamID.id+"_place"))){

      var x = document.createElement("BUTTON");
      var t = document.createTextNode("Prossima pagina");
      x.appendChild(t);
      document.body.appendChild(x);

      x.setAttribute("id", "pgNuova");
      x.setAttribute("onClick", "paginaSuccessiva()");
    }else{
      alert("Ritenta...");
      reload();
    }
  }else{
    alert("Ops!\nQualcosa e' andato storto... prova a rimettere i componenti!");
  }
}

function paginaSuccessiva(){
  alert("Complimenti!\n\nSomarello non saprebbe ricomporre nemmeno il suo computer!");
  location.href="../Pagine/linguaggi.html";
}