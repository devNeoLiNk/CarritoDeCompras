// VARIABLES
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
let articulosCarrito = [];

// EVENTOS
document.addEventListener("click", (e) => {
  e.preventDefault();

  // se agrega curso al presionar el botón 'Agregar al carrito'
  if (e.target.matches(".agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }

  // Eliminar curso del carrito
  if (e.target.matches(".borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");
    //eliminar del arreglo por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);

    carritoHTML(); // iterando mostrando su HTML
  }

  // Vaciando carrito
  if (e.target.matches("#vaciar-carrito")) {
    articulosCarrito = []; // resetando arreglo

    limpiarHTML();
  }
});

// FUNCIONES
/* Lee el contenido del card al que se le dio click y extrae su informacion */
function leerDatosCurso(curso) {
  // Creando objeto con el contenido del curso seleccionado
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Validar si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    // Actualizando cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // retorna obj actualizando
      } else {
        return curso; // retorna obj que son duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agregando elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  console.log(articulosCarrito);

  carritoHTML();
}

// Mostrando el carrito en el HTML
function carritoHTML() {
  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${imagen}" width="50"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;

    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

// Eliminando elementos del tbody
function limpiarHTML() {
  // forma lenta
  // contenedorCarrito.innerHTML = '';

  // forma rapida
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}