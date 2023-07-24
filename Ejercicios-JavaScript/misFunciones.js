/**
 * Conversor de unidades: "metros, pulgadas, yardas y pies"
 * @param{string} id - El id de los inputs
 * @param{number} valor - El valor de los inputs
 * 
 */
function conversor(id, valor) {
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("se ingreso un valor invalido");
        document.unidades.unid_metro.value = "";
        document.unidades.unid_pulgada.value = "";
        document.unidades.unid_pie.value = "";
        document.unidades.unid_yarda.value = "";
    }
    else if (id == "metro") {
        document.unidades.unid_pulgada.value = Math.round(39.3701 * valor * 100) / 100;
        document.unidades.unid_pie.value = Math.round(3.28 * valor * 100) / 100;
        document.unidades.unid_yarda.value = Math.round(1.0931 * valor);
    }
    else if (id == "pulgada") {
        document.unidades.unid_metro.value = Math.round(0.0254 * valor * 100) / 100;
        document.unidades.unid_pie.value = Math.round(0.0833 * valor * 100) / 100;
        document.unidades.unid_yarda.value = Math.round(0.0277 * valor * 100) / 100;
    }
    else if (id == "pie") {
        document.unidades.unid_metro.value = Math.round(0.3048 * valor * 100) / 100;
        document.unidades.unid_pulgada.value = Math.round(12 * valor * 100) / 100;
        document.unidades.unid_yarda.value = Math.round(0.3333 * valor * 100) / 100;
    }
    else if (id == "yarda") {
        document.unidades.unid_metro.value = Math.round(0.9144 * valor * 100) / 100;
        document.unidades.unid_pulgada.value = Math.round(36 * valor * 100) / 100;
        document.unidades.unid_pie.value = Math.round(3 * valor * 100) / 100;
    }
}
function convertirgr(id) {
    var grad, rad;

    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    }
    else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valor) {
    if (valor == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    }
    else if (valor == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

function suma() {
    var n1, n2;
    n1 = Number(document.getElementsByName("sum_num1")[0].value);
    n2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = n1 + n2;
}

function resta() {
    var n1, n2;
    n1 = Number(document.getElementsByName("res_num1")[0].value);
    n2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = n1 - n2;
}

function multi() {
    var n1, n2;
    n1 = Number(document.getElementsByName("mul_num1")[0].value);
    n2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = n1 * n2;
}

function div() {
    var n1, n2;
    n1 = Number(document.getElementsByName("div_num1")[0].value);
    n2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = n1 / n2;
}

function cargar_web() {
    var can, uni, urlcomp;
    can = document.getElementById("distancia").value;
    uni = document.getElementsByName("unidades")[0].value;
    urlcomp = "segundaWeb.html#" + can + "#" + uni;
    window.open(urlcomp);
}

function cargar_res() {
    var cant, unid, urlcompl;
    urlcompl = window.location.href.split("/")[5];
    cant = urlcompl.split("#")[1];
    unid = urlcompl.split("#")[2];

    document.getElementById("dist").value = cant + " " + unid;

}

function guardarLS(){
    let distancia, unidad;
    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distancials", distancia);
    localStorage.setItem("unidadls", unidad);
    window.open('2_web.html');
}

function cargarLS(){
     let can, uni;
     can = localStorage.getItem("distancials");
     uni = localStorage.getItem("unidadesls");

     document.getElementById("dist").value = can + " " + uni;
}
 