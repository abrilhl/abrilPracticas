const contenedorTareas = document.getElementById('contenedorTareas');
const botonAgregar = document.getElementById('botonAgregar');
const botonImagen1 = document.getElementById('botonImagen1');
const botonImagen2 = document.getElementById('botonImagen2');
const botonImagen3 = document.getElementById('botonImagen3');
const botonEliminar = document.getElementById('botonEliminar');

function agregarTarea() {
    const tarea = document.createElement('div');
    tarea.className = 'tarea';
    const texto = document.createElement('p');
    texto.className = 'texto-tarea';
    texto.textContent = 'Nueva tarea';

    tarea.appendChild(texto);
    contenedorTareas.appendChild(tarea);
}
function agregarTareaConImagen1() {
    agregarTareaConImagen1('../Statics/media/img/imagen1.jpg');
}
function agregarTareaConImagen2(){
    agregarTareaConImagen2('../Statics/media/img/imagen2.jpg');
}
function agregarTareaConImagen3() {
    agregarTareaConImagen3('../Statics/media/img/imagen3.jpg');
}

function eliminarUltimaTarea() {
    const tareas = document.querySelectorAll('.tarea');
    if (tareas.length > 0){
        tareas[tareas.length - 1].remove();
}
}
botonAgregar.addEventListener('click', agregarTarea);
botonImagen1.addEventListener('click', () => agregarTareaConImagen(1));
botonImagen2.addEventListener('click', () => agregarTareaConImagen(2));
botonImagen3.addEventListener('click', () => agregarTareaConImagen(3));
botonEliminar.addEventListener('click', eliminarUltimaTarea);