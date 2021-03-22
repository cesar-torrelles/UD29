function validarFecha(fecha) {
    if (/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(fecha)){
        alert("comprobacion fecha: La fecha " + fecha + " es correcta.");
    } else {
        alert("comprobacion fecha: La fecha " + fecha + " está en el formato incorrecto.");
    }
}

function validarEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("comprobacion mail: La dirección de email " + email + " es correcta.");
    } else {
        alert("comprobacion mail: La dirección de email es incorrecta.");
    }
}

function escapeHTML(text){
    var replacements = [[/([&])/, "&amp;"],[/([\"])/,"&quot;"],
                        [/([<])/,"&lt;"],[/([>])/, "&gt;"]];
    replacements.forEach(replace => {
        text = text.replace(replace[0], replace[1]);
    });


    return ("comprobacion html: " +text);
}

function nombreApellidos(nombre){
    var correcto = false;
    if(/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(nombre)){
        correcto = true;
    }

    if(correcto==true){
        var ordenado = nombre.split(' ').map(s=>s.trim());
        return ordenado.reverse();
    }
    return "comprobacion nombre: Nombre y/o apellido mal introducido";
}


function etiquetas(html) {
    var contenido = html.match(/(?!<title>)\w+(?=<\/title>)/gi);

    return ("comprobacion etiquietas: " +contenido);
}

alert(validarFecha("23/1984/12"));

alert(validarEmail("eduardo.martinez@gmail.es"));

alert(escapeHTML("r<e&mp\"az>a"));

alert(nombreApellidos("Eduardo Martinez"));

alert(etiquetas(`<div><title>titulo1</title><title>titulo2</title></div>`));








