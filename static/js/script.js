/* INTEGRANTES:

Rodrigo Vega Linares		20120169
Axel Martin Vega Espinoza	20120168

GRUPO: C

HORARIO: 7:00 - 9:00 */

function miFuncion() {
    console.log("Entra");

    const nombre = document.getElementById("name").value;
    let control1 = document.getElementById("noC").value;
    let rfc1 = document.getElementById("rfc").value;
    let tel1 = document.getElementById("tel").value;
    let correo1 = document.getElementById("correo").value;

    var bol1 = false, bol2 = false, bol3 = false, bol4 = false;

    console.log(`1= ${bol1}, 2= ${bol2},3= ${bol3},4= ${bol4}`);

    var regex = /^(|c|m)(\d{2}(120|121)\d{3})$/;
    if (regex.test(control1)){
        var text1 = regex.exec(control1);
        var bol1 = true;
        console.log(text1.toString());
    }else{
        console.log("NO es correcto el NumControl");
    }

    regex = /^[A-Z]{4}(\d{2})(\d{2})(\d{2})[A-Z0-9]{3}$/;
    if (regex.test(rfc1)){
        var text2 = regex.exec(rfc1);
        var bol2 = true; 
        console.log(text2.toString());
    }else{
        console.log("NO es correcto el RFC");
    }

    regex = /^443\d{7}$/;
    if (regex.test(tel1)){
        var text3 = regex.exec(tel1);
        var bol3 = true; 
        console.log(text3.toString());
    }else{
        console.log("NO es correcto el Numero de Telefono");
    }

    regex = /^l(\d{2}(120|121)\d{3})@morelia\.tecnm\.mx$/;
    if (regex.test(correo1)){
        var text4 = regex.exec(correo1);
        var bol4 = true; 
        console.log(text4.toString());
    }else{
        console.log("NO es correcto el Correo");
    }

    console.log(`1= ${bol1}, 2= ${bol2},3= ${bol3},4= ${bol4}`);

    if (bol1 && bol2 && bol3 && bol4) {
        if (text1[2].toString() == text4[1].toString()) {
            console.log(`Sí coincide | ${text1[2]} con ${text4[1]}`);
            document.getElementById("resultado").innerHTML = `Usuario Verificado: ${nombre} nacido el día ${text2[3]} del mes ${text2[2]} del año ${text2[1]}`;
        }else{
            console.log(`No coincide | ${text1[2]} con ${text4[1]}`);
            document.getElementById("resultado").innerHTML = `Usuario Incorrecto`;
        }
        
    }else{
        document.getElementById("resultado").innerHTML = `Usuario Incorrecto`;
    }

    console.log("_____________________");
    // console.log(`1= ${nombre}, 2= ${control1},3= ${rfc},4= ${tel}, 5= ${correo},`);

};