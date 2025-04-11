// Obtener referencias a los elementos
let inputs = document.querySelectorAll('#datos_basicos input');
let comentarioInput = document.getElementById('comentario');
let agregarComentarioBtn = document.getElementById('agregar-comentario');

// Crear contenedor para los comentarios (se agrega al final del body)
let comentariosLista = document.createElement('div');
comentariosLista.id = 'comentarios-lista';
document.body.appendChild(comentariosLista);

// Función que se ejecuta al hacer clic en "Agregar Comentario"
agregarComentarioBtn.addEventListener('click', function () {
  // Obtener los valores de los inputs
  let matricula = inputs[0].value.trim();
  let nombre = inputs[1].value.trim();
  let carrera = inputs[2].value.trim();
  let facultad = inputs[3].value.trim();
  let tituloLibro = inputs[4].value.trim();
  let comentarioTexto = comentarioInput.value.trim();

  // Verificar que todos los campos estén llenos
  if (
    matricula === '' ||
    nombre === '' ||
    carrera === '' ||
    facultad === '' ||
    tituloLibro === '' ||
    comentarioTexto === ''
  ) {
    alert('⚠️ Por favor, completa todos los campos antes de enviar el comentario.');
    return;
  }
  console.log("La matrícula del estudiante es:", matricula);
  console.log("El nombre del estudiante es:", nombre);
  console.log("La carrera del estudiante es:", carrera);
  console.log("La facultad del estudiante es:", facultad);
  console.log("El título del libro es:", tituloLibro);
  console.log("El comentario al libro fue:", comentarioTexto);

  // Crear un div para el comentario
  let comentarioDiv = document.createElement('div');
  comentarioDiv.className = 'comentario';

  // Obtener la fecha y hora actual
  let fecha = new Date();
  let fechaTexto = fecha.toLocaleDateString();
  let horaTexto = fecha.toLocaleTimeString();

  // Crear contenido del comentario
  let contenido = '<h3>📚 ' + tituloLibro + '</h3>';
  contenido += '<p>📝 ' + comentarioTexto + '</p>';
  contenido += '<p class="fecha">🕒 Publicado el ' + fechaTexto + ' a las ' + horaTexto + '</p>';

  // Agregar contenido al div del comentario
  comentarioDiv.innerHTML = contenido;

  // Crear botón para eliminar comentario
  let eliminarBtn = document.createElement('button');
  eliminarBtn.textContent = 'Eliminar';
  eliminarBtn.addEventListener('click', function () {
    comentariosLista.removeChild(comentarioDiv);
  });

  // Agregar botón al div
  comentarioDiv.appendChild(eliminarBtn);

  // Agregar el comentario a la lista
  comentariosLista.appendChild(comentarioDiv);

  // Limpiar los campos de entrada
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  comentarioInput.value = '';
});