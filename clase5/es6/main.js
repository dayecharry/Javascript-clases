//map, filter, find, findIndex, reduce
const personajes = [
  { name: 'batman', tipo: 'heroe', power: 40, defense: 130 },
  { name: 'spiderman', tipo: 'heroe', power: 60, defense: 230 },
  { name: 'joker', tipo: 'VILLANO', power: 100, defense: 30 },
  { name: 'superman', tipo: 'heroe', power: 150, defense: 70 },
  { name: 'duende verde', tipo: 'VIllano', power: 90, defense: 110 },
  { name: 'Dr. Octopus', tipo: 'villano', power: 220, defense: 150 },
];

const heroes = [];

for (const unPersonaje of personajes) {
  if (unPersonaje.tipo === 'heroe') {
    heroes.push(unPersonaje);
  }
}
console.log(heroes);

const heroesFilter = personajes.filter((cadaPersonaje) => {
  return cadaPersonaje.tipo === 'heroe';
});
console.log(heroesFilter);

const menorAcien = personajes.filter(
  (cadaPersonje) => cadaPersonje.power <= 100
);
console.log(menorAcien);

const villanos = personajes
  .filter(
    (cadaPersonaje) =>
      cadaPersonaje.tipo.toLowerCase() === 'villano'.toLowerCase()
  )
  .map((cadaPersonaje) => cadaPersonaje.name);

console.log(villanos);

//const nombreVillanos = villanos.map((cadaPersonaje) => cadaPersonaje.name);
//console.log(nombreVillanos);

//find devuelve el primer elemento del array que con una condicion dada
const findVillano = personajes.find(
  (cadaElemento) => cadaElemento.tipo.toLowerCase() === 'villano'.toLowerCase()
);
console.log(findVillano);

// findIndex-> devuelve la posicion de un elemento en el array
const posicion = personajes.findIndex(
  (unPersonaje) => unPersonaje.name === 'superman'
);
console.log(posicion);

// reduce
const totalPower = personajes.reduce(
  (total, unPersonaje) => unPersonaje.power + total,
  0
);
console.log(totalPower);

const carrito = [
  {
    name: 'pantalon',
    cantidad: 1,
    precio: 20.9,
  },
  {
    name: 'camiseta',
    cantidad: 3,
    precio: 10.7,
  },
  {
    name: 'jersey',
    cantidad: 1,
    precio: 35.7,
  },
];
const totalPagar = carrito.reduce(
  (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
  0
);
console.log(totalPagar);
//total a pagar sin usar REDUCE
let total = 0;
for (const producto of carrito) {
  //total = (producto.cantidad * producto.precio) + total;
  total += producto.cantidad * producto.precio;
}
console.log(total);
// Productos: pantalon, camiseta, jersey
