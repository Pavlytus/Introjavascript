// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro() {
    let titulo = prompt("¿Qué libro has leído?");
    let autor = prompt("¿Quién es el autor de este libro?");
    let año = prompt("¿En qué año leíste este libro?");

    // Asegurarse de que el usuario haya ingresado todos los datos
    if (titulo && autor && año) {
        let libro = {
            titulo: titulo,
            autor: autor,
            año: año
        };
        librosLeidos.push(libro);
        console.log(`Se ha agregado el libro: "${titulo}" de ${autor}, leído en el año ${año}`);
    } else {
        console.log("Todos los campos son obligatorios.");
    }
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro aún.");
    } else {
        console.log("Libros que has leído:");
        // Usamos un ciclo for para mostrar los detalles de cada libro
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. Título: "${librosLeidos[i].titulo}", Autor: ${librosLeidos[i].autor}, Leído en el año: ${librosLeidos[i].año}`);
        }
    }
}