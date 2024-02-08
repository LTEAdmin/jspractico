"use strict";

let val1 = document.querySelector("#valor1");
let val2 = document.querySelector("#valor2");
 

const btnsumar = document.querySelector("#btn-sumar");// ACA SELECCIONAMOS EL BOTON
btnsumar.addEventListener("click", function () {
   
    if ((val1.value == "") || (isNaN(val1.value))) {
        document.querySelector("#valor1").innerHTML = ""
        alert(`Debe ingresar valor numerico en valor 1`)
    }
    else {

        if (val2.value == "" && isNaN(val2.value)) {
            document.querySelector("#valor2").innerHTML = "";
            alert(`Debe ingresar valor numerico en valor 1`);
        }
        else {
        let suma = (parseFloat(val1.value) + parseFloat(val2.value)) 
        document.querySelector("#resultado").innerHTML = String(suma);
    } }
}

)

const btnrestar = document.querySelector("#btn-restar");// ACA SELECCIONAMOS EL BOTON
btnrestar.addEventListener("click", function () {
  
    if ((val1.value == "") && (isNaN(val1.value))) {
        document.querySelector("#valor1").innerHTML = ""
        alert(`Debe ingresar valor numerico en valor 1`)
    }
    else {

        if (val2.value == "" && isNaN(val2.value)) {
            document.querySelector("#valor2").innerHTML = "";
            alert(`Debe ingresar valor numerico en valor 1`);
        }
        else {
            let resta = (parseFloat(val1.value) - parseFloat(val2.value))
            alert(`${resta}`)
            if (resta < 0) {
                document.querySelector("#resultado").innerHTML = "0";
            }
            else {
                document.querySelector("#resultado").innerHTML = String(resta);
            }
        }
    } 
}

)

