function lanzamiento() {
    var array= {};
    var sumatorio = 0;

    for(var i=0;i<36000;i++){
        var dado1 = parseInt(6*Math.random()+1);
        var dado2 = parseInt(6*Math.random()+1);
        sumatorio=dado1+dado2;
        if(sumatorio in array){
            calculo = array[sumatorio] +1;
            array[sumatorio]=calculo;  
            
        }else{
            array[sumatorio]=1;
        }
    }
    console.log(array);
    var resuelto = "La sumatorio 2 ha salido "+array[2] +" veces\n"+
                    "La sumatorio 3 ha salido "+array[3] +" veces\n"+
                    "La sumatorio 4 ha salido "+array[4] +" veces\n"+
                    "La sumatorio 5 ha salido "+array[5] +" veces\n"+
                    "La sumatorio 6 ha salido "+array[6] +" veces\n"+
                    "La sumatorio 7 ha salido "+array[7] +" veces\n"+
                    "La sumatorio 8 ha salido "+array[8] +" veces\n"+
                    "La sumatorio 9 ha salido "+array[9] +" veces\n"+
                    "La sumatorio 10 ha salido "+array[10] +" veces\n"+
                    "La sumatorio 11 ha salido "+array[11] +" veces\n"+
                    "La sumatorio 12 ha salido "+array[12] +" veces\n";

    return resuelto;
}

alert(lanzamiento());