// !importante
// ? comentario
// * comemtario

console.log('holisss');
var apellido = 'romero';

//diferencia entre let y const es que let, puede cambiar su valor mientras const,  mantiene su valor constante por siempre.
let edad = 80; // --> definiendo una variable y asignando el valor 80
const pi = 3.16;
//! TIPOS DE DATOS

//Numericos
let precio = 19.99;
edad = 85; // --> asignando el valor 85

// cadenas de caracteres -> Strings
let nombre = 'Maria julia'; // "", '', ``

console.log(typeof precio);
console.log(typeof nombre);

//booleanos --> true, false
let booleano = false;
console.log(typeof booleano);

//null, undefined --> palabras propias del lenguaje y no llevan comillas
let direccion;
console.log(typeof direccion);
const pais = null;
console.log(typeof pais);

//ctrl +z, ctrl+ s, ctrl+ c, ctrl+ v, ctrl + x
//Array, Objecto
const listaMascotas = ['miaumiau', 'thor', 'petra']; // ! siempre empiezan en el indice 0
listaMascotas[0] = 'guaguau';
listaMascotas[2] = 'anacleta';
listaMascotas[4] = 'toby'; // ! si la posición indicada no existe la crea y sino sustituye el valor

console.log(listaMascotas[0]);
console.log(listaMascotas.length);
// push --> añade un nuevo elemento al array, al final
listaMascotas.push('luna');

console.log(listaMascotas);

// objetos
const persona = {
  nombre: 'Anabel',
  edad: 25,
  altura: 1.8,
  direccion: {
    calle: 'avenida ensanche',
    ciudad: 'madrid',
    pais: 'España',
    barrio: 'malasaña',
  },
};
console.log(persona.nombre);
console.log(persona.altura);
console.log(persona.direccion.ciudad);
console.log(persona.direccion.barrio);
console.log(
  persona.nombre + ' ' + persona.edad + ' ' + persona.direccion.barrio
);
const listadoAlumnos = [
  { nombre: 'raque', apellido: 'rosales' },
  { nombre: 'emilio', apellido: 'everduim' },
  { nombre: 'jesus', apellido: 'Zalvez' },
];

console.log(listadoAlumnos[2].nombre + ' ' + listadoAlumnos[2].apellido);

// crear un array de  3 objetos-> mascotas-> nombre, edad, padres["valor madre", "valor padre"]
// console log de el nombre del padre y de la madre de la mascosta en la posicion 1
