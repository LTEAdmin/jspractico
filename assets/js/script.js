"use strict";

let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();
  let textNombre = document.querySelector("#nombre").value;
  let textasunto = document.querySelector("#asunto").value;
  let textmensaje = document.querySelector("#mensaje").value;
  let resultado = validar(textNombre, textasunto, textmensaje);
  if (resultado == true) {
    exito();
  }
});

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTM = "";
  document.querySelector(".errorAsunto").innerHTM = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
  document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
}

function validar(nombre, asunto, mensaje) {
  let pasamosLaValidacion = true;
  let validacionNombre = /[a-zA-Z]/gim;
  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido.";
    pasamosLaValidacion = false;
  }
  let validacionasunto = /[a-zA-Z]/gim;
  if (validacionasunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido.";
    pasamosLaValidacion = false;
  }
  let validacionmensaje = /[a-zA-Z]/gim;
  if (validacionmensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}
