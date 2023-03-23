let nombre = 'Pepito';
let edad = 25;

console.log('Bienvenida' + nombre);
console.log(nombre, edad);

//  concatenación
console.log('Bienvenido ' + nombre + ' tienes ' + edad + ' años');

//template string--> interpolación
console.log(`Bienvenido ${nombre} tienes ${edad} años`);

//! bucles
const nombres = ['raquel', 'luis', 'jesus', 'diego'];
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);

for (let i = 1; i <= 10; i++) {
  // i = i+1
  // bloque de instrucciones que necesitas repetir
  console.log(i);
}
for (let i = 10; i > 0; i--) {
  // i = i-1
  console.log(i);
}
/*
    i = 10  --> imprimir 10
    i = i -1 = 9  --> imprimir 9
    i = i -1 = 8 --> imprimir 8
    .... 
    i = i-1 = 0 
*/

// for.. clasico, pintar en la cada nombre del array de nombres
for (let index = 0; index < nombres.length; index++) {
  console.log(nombres[index]);
}
const productos = [
  { nombre: 'refresco', precio: 3, stock: 50 },
  { nombre: 'Chocolate', precio: 5, stock: 150 },
  { nombre: 'Pan', precio: 4, stock: 10 },
];

//pintar en la consola, el nombre y el precio de cada producto del array productos
for (let indice = 0; indice < productos.length; indice++) {
  // "el producto es " refresco y el precio es 3
  console.log(
    `El producto es ${productos[indice].nombre} y el precio es ${productos[indice].precio}`
  );
}
// ! for..of otra forma para hacer iteraciones de un array
for (const cadaProducto of productos) {
  console.log(
    'El producto es ' +
      cadaProducto.nombre +
      ' y el precio es ' +
      cadaProducto.precio
  );
}

const superheroes = [
  {
    name: 'Spiderman',
    power: 60,
    ciudad: 'nueva york',
  },
  {
    name: 'Hulk',
    power: 150,
    ciudad: 'boston',
  },
  {
    name: 'Superman',
    power: 500,
    ciudad: 'chicago',
  },
];
//soy spiderman y mi poder es 60
//soy hulk y mi poder es 150
//soy superman y mi poder es 500
//"el total de todos mis super heroes  es 710"
let total = 0;
for (const cadaSuperheroe of superheroes) {
  console.log(
    `Soy ${cadaSuperheroe.name} y mi poder es ${cadaSuperheroe.power}`
  );
  total = total + cadaSuperheroe.power;
}
console.log(`El total es ${total}`);
console.log('El total es ' + total);
console.log('El total es total');

// ! forEach() -> Bucle
superheroes.forEach(function (cadaSuperheroe) {
  console.log(cadaSuperheroe.name, cadaSuperheroe.ciudad);
});

// ! for in --> este bucle  recorre las propiedades de un objeto
const mascota = {
  name: 'lola',
  edad: 5,
  direccion: 'españa',
};
for (const key in mascota) {
  console.log(`la propiedad ${key} y el valor es ${mascota[key]}`);
  //name, edad, direccion
  // mascota[name], mascota[edad], mascota[direccion]
  //console.log(key);
}

//! for.. of, for clasico, forEach --> ARRAY
//? for..in -->  recorrer un objeto
// pintar en ña consola todas las propiedad de un superHeroe, y los que tengan power mayor que 100, indicar que es una maquina
//  recorro el array
for (const unSuperHeroe of superheroes) {
  console.log('**********************');
  // recorro  cada propiedad del objeto
  for (const clave in unSuperHeroe) {
    console.log(`la propiedad ${clave}  y el valor ${unSuperHeroe[clave]}`);
    //evaluo si la clave es el power
    if (clave === 'power') {
      if (unSuperHeroe[clave] > 100) {
        console.log('es una maquina');
      }
    }
  }
}
