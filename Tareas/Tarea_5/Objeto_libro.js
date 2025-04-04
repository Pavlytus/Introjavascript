// Problema: Crear objeto a partir de un Libro
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

// Instrucciones para resolver el problema:
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro. --> 

let Biblioteca = [
  {
    Titulo: "Los pilares de la Tierra",
    Autor: "Ken Follett",
    Anio: 1989,
    Estado: "Prestado",
    // Método para describir el libro dentro del objeto
    describirLibro: function() {
      console.log(`El libro titulado "${this.Titulo}", escrito por ${this.Autor} en el año ${this.Anio}, se encuentra ${this.Estado}.`);
    }
  },
  {
    Titulo: "El mundo de Sofía",
    Autor: "Jostein Gaarder",
    Anio: 1991,
    Estado: "Disponible",
    describirLibro: function() {
      console.log(`El libro titulado "${this.Titulo}", escrito por ${this.Autor} en el año ${this.Anio}, se encuentra ${this.Estado}.`);
    }
  },
  {
    Titulo: "La catedral del mar",
    Autor: "Ildefonso Falcones",
    Anio: 2006,
    Estado: "Disponible",
    describirLibro: function() {
      console.log(`El libro titulado "${this.Titulo}", escrito por ${this.Autor} en el año ${this.Anio}, se encuentra ${this.Estado}.`);
    }
  },
  {
    Titulo: "El nombre de la rosa",
    Autor: "Umberto Eco",
    Anio: 1980,
    Estado: "Prestado",
    describirLibro: function() {
      console.log(`El libro titulado "${this.Titulo}", escrito por ${this.Autor} en el año ${this.Anio}, se encuentra ${this.Estado}.`);
    }
  }
];

// Llamamos al método describirLibro para cada libro
for (let i = 0; i < Biblioteca.length; i++) {
  Biblioteca[i].describirLibro();
}