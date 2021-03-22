
window.onload = function(){
    pantalla=document.getElementById("textoPantalla");
    document.onkeydown = teclado;
}
x="0"; 
xi=1; 
coma=0;
ni=0;
op="no";

//mostrar número en pantalla según se va escribiendo:
function numero(valor) {
    if (x=="0" || xi==1) {
        pantalla.innerHTML=valor; 
        x=valor; 
    }else{
        if (valor==".") { 
            pantalla.innerHTML="0.";
            x=valor; 
            coma=1; 
        }else { 
            if (valor=="." && coma==0) {
                pantalla.innerHTML+=valor;
                x+=valor;
                coma=1; 
            }else if (valor=="." && coma==1) {

            } else {
                pantalla.innerHTML+=valor;
                x+=valor;
            }
        }
    }
    xi=0;
}
function operacion(s) {
    igual();
    ni=x; 
    op=s; 
    xi=1; 
}	
function igual() {
    if (op=="no") { 
        pantalla.innerHTML=x;	
    }else { 
        sl=ni+op+x;
        sol=eval(sl);
        pantalla.innerHTML=sol; 
        x=sol; 
        op="no"; 
        xi=1; 
    }
}
function raizc() {
    x=Math.sqrt(x);
    pantalla.innerHTML=x;
    op="no";
    xi=1;
}
function porcent() { 
    x=x/100; 
    pantalla.innerHTML=x; 
    igual();
    xi=1;
    }
function cambioSigno() { 
    nx=Number(x); 
    nx=-nx; 
    x=String(nx); 
    pantalla.innerHTML=x;
    }
function fraccion() {
    nx=Number(x);
    nx=(1/nx);
    x=String(nx);		 
    pantalla.innerHTML=x;
    xi=1; 
    }

function cambioSigno(){ 
    cifras=x.length; 
    br=x.substr(cifras-1,cifras);
    x=x.substr(0,cifras-1);
    if (x=="") {x="0";} 
    if (br==".") {coma=0;}
    pantalla.innerHTML=x;
    }
function borradoParcial() {
    pantalla.innerHTML=0; 
    x=0;
    coma=0;				
    }
function borradoTotal() {
    pantalla.innerHTML=0; 
    x="0"; 
    coma=0; 
    ni=0;
    op="no";
    }
function teclado (elEvento) { 
    evento = elEvento || window.event;
    k=evento.keyCode; 
    if (k>47 && k<58) { 
        p=k-48; 
        p=String(p);
        numero(p); 
    }	

    if (k>95 && k<106) {
        p=k-96;
        p=String(p);
        numero(p);
    }
    if (k==110 || k==190) {numero(".")} 
    if (k==106) {operacion('*')}
    if (k==107) {operacion('+')} 
    if (k==109) {operacion('-')} 
    if (k==111) {operacion('/')} 
    if (k==32 || k==13) {igual()} 
    if (k==46) {borradoTotal()} 
    if (k==8) {cambioSigno()} 
    if (k==36) {borradoParcial()}
}
