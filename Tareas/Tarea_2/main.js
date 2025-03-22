// Solicitar al usuario los datos necesarios
let edad = parseInt(prompt("Ingresa tu edad:")); // Edad de la persona
let municipioFronterizo = prompt("¿Resides en un municipio fronterizo del Norte del país? (si/no)").toLowerCase();
let embarazada = prompt("¿Estás embarazada? (si/no)").toLowerCase();
let semanasGestacion = 0;
if (embarazada === "si") {
  semanasGestacion = parseInt(prompt("¿Cuántas semanas de gestación tienes?"));
}
let cumple30EsteAnio = prompt("¿Cumples 30 años o más este año? (si/no)").toLowerCase();

// Condición 1: Mayores de 18 años y residentes en un municipio fronterizo del Norte del país
if (edad > 18 && municipioFronterizo === "si") {
  console.log("¡Puedes vacunarte! Cumples con el requisito de edad y residencia en municipio fronterizo.");
}
// Condición 2: Embarazadas mayores de 18 años con más de 9 semanas de gestación
else if (embarazada === "si" && edad > 18 && semanasGestacion > 9) {
  console.log("¡Puedes vacunarte! Cumples con el requisito de embarazo y edad.");
}
// Condición 3: Personas que cumplen 30 años o más este año
else if (cumple30EsteAnio === "si") {
  console.log("¡Puedes vacunarte! Cumples con el requisito de edad.");
}
// Si no se cumple ninguna de las condiciones
else {
  console.log("No puedes vacunarte, no cumples con los requisitos.");
}