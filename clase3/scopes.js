// variables globales, se puede acceder a ella desde cualquier lugar
let nombre = 'dayana';

if (nombre === 'dayana') {
  //variable locales
  let apellido = 'romero';
  console.log(apellido);
  console.log(nombre);
}
function sayHi() {
  let saludo = 'Hola como estas';
  //retorno  el valor de la variable
  return saludo;
}
console.log(sayHi());

function cambiarNombre() {
  nombre = 'Raquel';
  //la función  retorna por defecto undefined
  //no es obligatorio uso de return
}

cambiarNombre();
console.log(nombre);
