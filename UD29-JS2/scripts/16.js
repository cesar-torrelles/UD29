setInterval(function(){
    start = new Date();
    document.getElementById("horas").innerText=start.getHours();
    document.getElementById("minutos").innerText=start.getMinutes();
    document.getElementById("segundos").innerText=start.getSeconds();
},1000);
