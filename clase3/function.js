// !funciones
/*
    function NOMBREdeFUNCION(){
        contenido de la función, un serie de instrucciones
        array, operaciones aritmeticas, bucles, condicionales,
        crear valiables,  crear objetos.
        llamar a otras funciones que existan
    }
*/

function mifuncion(nombrePersona) {
  console.log(`hola ${nombrePersona} soy tu primera función`);
}
mifuncion('Pepe');
mifuncion('Anacleta');
mifuncion('Fulanito');
mifuncion('Perencejo');

//funciones con return
function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
suma(77, 41);
suma(123, 895);
console.log(`La sumatoria es ${suma(85, 74)}`);

// crear una función, reciba como parámetro un array y un numero, y añada al array el numero, siempre que el numero sea mayor que 50

const listaDeNumeros = [];

function agregarElementoArray(array, numero) {
  if (numero > 50) {
    array.push(numero);
  }
}
agregarElementoArray(listaDeNumeros, 150);
agregarElementoArray(listaDeNumeros, 15);
agregarElementoArray(listaDeNumeros, 99);
agregarElementoArray(listaDeNumeros, 0);

for (let i = 50; i <= 100; i++) {
  agregarElementoArray(listaDeNumeros, i);
}
console.log(listaDeNumeros);

// hacer una función reciba como parámetro una edad , y retorne un mensaje si puedes conducir o no

function puedoConducir(edad) {
  /*if (edad >= 18) {
    return 'Puedes conducir';
  } else {
    return 'No puedes conducir';
  }*/

  return edad >= 18 ? 'Puedes conducir' : 'NO puedes conducir'; // operador ternario
}
console.log(puedoConducir(50));

// hacer una función que calcule el iva de un  producto y retorne  precio con iva y el precio sin iva

function calculoIva(precio) {
  //21%
  let precioConIva = precio * 1.21; // (precio*100/21 ) + precio
  let precios = {
    precioConiva: precioConIva,
    precioSinIva: precio,
  };
  return precios;
}
const objeto = calculoIva(100);
console.log(objeto.precioConiva, objeto.precioSinIva);

//arrowfunction
const pintarApellido = (apellido = 'Garcias') => {
  console.log('el apellido es ' + apellido);
};
pintarApellido();
pintarApellido('Rosales');

// crear una funcion para calcular la edad  de los perros en años humanos
/*
    1er año del perro -> 5 años humanos
    2do año del perro --> 3 años humanos
    desde el tercer año --> 2 años humanos
    **********************
    perro tiene 6 años --> 5 + 3 +(2*4) = total
    perro tiene 3 años --> 5 + 3 +(2*1)= total
*/
const edadHumano = (edadPerro) => {
  let edadEnHumano = 0;
  if (edadPerro === 1) {
    edadEnHumano = 5;
  } else if (edadPerro === 2) {
    edadEnHumano = 8;
  } else {
    edadEnHumano = 8 + 2 * (edadPerro - 2);
  }
  return edadEnHumano;
};

console.log(edadHumano(5));

// tengo un array de superheroes, crear una función permita crear un nuevo array solo con los heroes que tengan un poder mayor a un valor dado
/*
1.- crear function
2.- para recorre el array debo usar un bucle 
3.- sacar solo los  superheroes con un poder mayor al indicado --> condicional
4.- añadirlo a un array nuevo
*/
const superheroes = [
  { name: 'Spiderman', power: 60, ciudad: 'nueva york' },
  { name: 'Hulk', power: 150, ciudad: 'boston' },
  { name: 'Superman', power: 500, ciudad: 'chicago' },
];
const mayorPoder = (valor) => {
  const heroeSeleccionados = [];
  for (const unSuperHeroe of superheroes) {
    if (unSuperHeroe.power > valor) {
      heroeSeleccionados.push(unSuperHeroe);
    }
  }
  return heroeSeleccionados;
};
console.log(mayorPoder(120));
