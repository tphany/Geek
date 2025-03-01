import { conexionAPI } from "/js/conexionAPI.js";

const formulario = document.querySelector("[data-formulario]")

async function agregarProducto(evento){
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-imagen]").value;

    await conexionAPI.agregarProducto(nombre,descripcion,precio,url);

    window.location.href = "index.html";
    
}

formulario.addEventListener("submit",evento => agregarProducto(evento)) /*este evento realiza la acción de enviar y agregar un nuevo producto*/