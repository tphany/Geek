

import { conexionAPI } from "/js/conexionAPI.js";

const lista = document.querySelector("[data-lista]");/*con esto el ul del html queda ingresado en js*/

function crearCard(nombre,descripcion,precio,url) {
    const producto = document.createElement("li");
    producto.className = "product-card";/*con la clase de la lista*/
    producto.innerHTML = `
        <img src="${url}" alt="${descripcion}" class="product-image">
        <p class="product-name">${nombre}</p>
        <div class="precio__delete">
            <p class="product-price"><b>$${precio}CLP</b></p>
            <button class="delete-button">
                <img src="images/delete.png" alt="Eliminar" class="delete-icon">
            </button>
        </div>`;

        const deleteButton = producto.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            producto.remove(); // Elimina la card del DOM
        });

        
    return producto;
}

async function mostrarProducto() {
    const listaAPI = await conexionAPI.mostrarProducto(); // Obtener datos desde la API
    
    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.nombre,producto.descripcion,producto.precio,producto.url)))
}

mostrarProducto();