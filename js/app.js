// VARIABLES

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    // se agrega curso al presionar el botón 'Agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);
}

// FUNCIONES

function agregarCurso(e){
    e.preventDefault()

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

/* Lee el contenido del card al que se le dio click y extrae su informacion */
function leerDatosCurso(curso){
    console.log(curso);
    
    // Creando objeto con el contenido del curso seleccionado
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso);
}
