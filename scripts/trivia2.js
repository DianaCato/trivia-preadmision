/*Funcion para el formulario visual*/

function chVisual() {

    var visualSi = 0;
    var visualNo = 0;

/* seleccion de las respuestas */
    var v1 = document.getElementsByTagName("input")[0].checked; //true
    var v2 = document.getElementsByTagName("input")[2].checked; //true
    var v3 = document.getElementsByTagName("input")[5].checked; //false
    var v4 = document.getElementsByTagName("input")[6].checked; //true
    var v5 = document.getElementsByTagName("input")[8].checked; //true
    var v6 = document.getElementsByTagName("input")[10].checked; //true
    var v7 = document.getElementsByTagName("input")[13].checked;//false

    /*Sumatoria */

    if (v1 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    if (v2 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    if (v3 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    if (v4 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    if (v5 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    if (v6 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    if (v7 === true) {
        visualSi++;
    }
    else {
        visualNo++;
    }

    /*Mensaje final*/

    if (visualSi < visualNo) {
        alert("Lo lamento, no es tu estilo de aprendizaje. Te invito a que hagas la trivia para DESCUBRIR el tuyo. ")
    }
    else {
        alert("Definitivamente tu aprendizaje es VISUAL")
    }
}

/* ESTILO AUDITIVO*/

function chAuditivo() {

    var auditivoSi = 0;
    var auditivoNo = 0;

    var v1 = document.getElementsByTagName("input")[15].checked; //true
    var v2 = document.getElementsByTagName("input")[17].checked; //true
    var v3 = document.getElementsByTagName("input")[19].checked; //true
    var v4 = document.getElementsByTagName("input")[21].checked; //true
    var v5 = document.getElementsByTagName("input")[23].checked; //true
    var v6 = document.getElementsByTagName("input")[26].checked; //false
    var v7 = document.getElementsByTagName("input")[27].checked; //true


    if (v1 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }

    if (v2 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }

    if (v3 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }

    if (v4 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }

    if (v5 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }

    if (v6 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }

    if (v7 === true) {
        auditivoSi++;
    }
    else {
        auditivoNo++;
    }
 /* Alerta con el resultado de la trivia */

    if (auditivoSi < auditivoNo) {
        alert("Lo lamento, no es tu estilo de aprendizaje. Te invito a que hagas la trivia para DESCUBRIR el tuyo.")
    }
    else {
        alert("Definitivamente tu aprendizaje es AUDITIVO")
    }
}


/*aprendizaje kinestesico*/

function chKinestesico() {

    var kinestesicoSi = 0;
    var kinestesicoNo = 0;

    var v1 = document.getElementsByTagName("input")[30].checked; //true
    var v2 = document.getElementsByTagName("input")[32].checked; //true
    var v3 = document.getElementsByTagName("input")[34].checked; //true
    var v4 = document.getElementsByTagName("input")[37].checked; //False
    var v5 = document.getElementsByTagName("input")[38].checked; //true
    var v6 = document.getElementsByTagName("input")[41].checked; //false 
    var v7 = document.getElementsByTagName("input")[42].checked; //true


    if (v1 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }

    if (v2 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }

    if (v3 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }

    if (v4 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }

    if (v5 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }

    if (v6 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }

    if (v7 === true) {
        kinestesicoSi++;
    }
    else {
        kinestesicoNo++;
    }
 
 /* Alerta con el resultado de la trivia */

    if (kinestesicoSi < kinestesicoNo) {
        alert("Lo lamento, no es tu estilo de aprendizaje. Te invito a que hagas la trivia para DESCUBRIR el tuyo. ")
    }
    else {
        alert("Definitivamente tu aprendizaje es KINESTÉSICO")
    }
}
