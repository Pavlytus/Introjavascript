const formulario = document.getElementById('formulario');
const listaComentarios = document.getElementById('listaComentarios');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const comentario = document.getElementById('comentario').value.trim();

  if (titulo && comentario) {
    const div = document.createElement('div');
    div.className = 'comentario';

    const fechaHora = new Date().toLocaleString();

    div.innerHTML = `
      <strong>${titulo}</strong><br>
      <p>${comentario}</p>
      <div class="fecha">Publicado el: ${fechaHora}</div>
      <button class="eliminar">Eliminar</button>
    `;

    div.querySelector('.eliminar').addEventListener('click', function() {
      listaComentarios.removeChild(div);
    });

    listaComentarios.prepend(div);
    formulario.reset();
  }
});
