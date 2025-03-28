//CICLO FOR
// Declaramos un arreglo con varios tipos de frutas
// let frutas = ["manzana", "banana", "manzana", "naranja", "pera", "banana", "manzana"];

// 
// let conteoFrutas = {};

// for (let i = 0; i < frutas.length; i++) {
//     let fruta = frutas[i];  // Obtenemos el nombre de la fruta actual
//     if (conteoFrutas[fruta]) {
//         conteoFrutas[fruta] += 1;  // Si la fruta ya existe, sumamos 1
//     } else {
//         conteoFrutas[fruta] = 1;   // Si no existe, iniciamos el conteo en 1
//     }
// }

// console.log("Cantidad de cada tipo de fruta (con ciclo for):");
// for (let tipo in conteoFrutas) {
//     console.log(`${tipo}: ${conteoFrutas[tipo]}`);
// }

// CICLO WHILE

let frutas = ["manzana", "banana", "manzana", "naranja", "pera", "banana", "manzana"];

let conteoFrutas = {};

let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];  // Obtenemos el nombre de la fruta actual
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta] += 1;  // Si la fruta ya existe, sumamos 1
    } else {
        conteoFrutas[fruta] = 1;   // Si no existe, iniciamos el conteo en 1
    }
    i++;  // Aumentamos el índice
}

console.log("Cantidad de cada tipo de fruta (con ciclo while):");
for (let tipo in conteoFrutas) {
    console.log(`${tipo}: ${conteoFrutas[tipo]}`);
}