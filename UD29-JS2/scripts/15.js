var cambio = 0;
var anterior = "";


document.getElementById("imagen1").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen1");
    }else{
        Cambiar("imagen1");
    }
});

document.getElementById("imagen2").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen2");
    }else{
        Cambiar("imagen2");
    }
});

document.getElementById("imagen3").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen3");
    }else{
        Cambiar("imagen3");
    }
});

document.getElementById("imagen4").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen4");
    }else{
        Cambiar("imagen4");
    }
});

document.getElementById("imagen5").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen5");
    }else{
        Cambiar("imagen5");
    }
});

document.getElementById("imagen6").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen6");
    }else{
        Cambiar("imagen6");
    }
});

document.getElementById("imagen7").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen7");
    }else{
        Cambiar("imagen7");
    }
});

document.getElementById("imagen8").addEventListener("click", function(){
    if(cambio==0){
        Visor("imagen8");
    }else{
        Cambiar("imagen8");
    }
});


function Cambiar(imagen){
    var visor = document.getElementById("visor").src;
    var posterior = document.getElementById(imagen).src;
    var atributo2 = document.getElementById("atributo").innerText;
    var atributo3 = document.getElementById(imagen).alt;

    document.getElementById(imagen).alt=atributo2;
    document.getElementById(anterior).alt=atributo3;
    document.getElementById(anterior).src=posterior;
    document.getElementById(imagen).src=visor;
    document.getElementById("visor").src="";
    document.getElementById("atributo").innerText="";
    cambio=0;

}
function Visor(imagen){
    var original = document.getElementById(imagen).src;
    var atributo = document.getElementById(imagen).alt;
    document.getElementById("visor").src=original;
    document.getElementById("atributo").innerText=atributo;
    anterior=imagen;
    cambio=1;
}

