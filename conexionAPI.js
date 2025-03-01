

/*con este archivo nos conectaremos a nuestro json-server*/
async function mostrarProducto() {
  const conexion = await fetch("http://localhost:3000/Articulos");

  // Esperar la conversión a JSON
  const conexionConvertida = await conexion.json();

  return conexionConvertida
  //console.log(conexionConvertida)
}

/*Aquipodremos crear nuevos productos en la página, y también activaremos el formulario */
async function agregarProducto(nombre,descripcion,precio,url){
  const conexion = await fetch("http://localhost:3000/Articulos",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
      nombre:nombre,
      descripcion:descripcion,
      precio:precio,
      url:url
    })
})
const conexionConvertida = conexion.json();
return conexionConvertida;

}

export const conexionAPI={
  mostrarProducto,
  agregarProducto
}

