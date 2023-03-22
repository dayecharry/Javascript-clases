//tortilla = huevos + patatas
// toma de decisiones ->  evaluar si se cumple una condicion,  para ejecutar una serie de acciones o proceso
// siempre evalua un valor booleano. TRUE , FALSE

let ingrediente = 'pan';
// >,  <, >= , <= , ===
if (ingrediente === 'huevos') {
  console.log('hacer tortilla');
} else {
  console.log('solo hare cafe');
}
/******* */
let edad = 75;
if (edad < 18) {
  console.log('epa debes esparar unos añitos');
}
/*  <18 msj-> no puedes entrar
    18 y 50 -> bienvenido
    50 y  60-> bienvenido tiene 5% de descuento
    >60 -> bienvenido entrada gratis
*/
if (edad < 18) {
  console.log('No puedes entrar');
} else if (edad >= 18 && edad <= 50) {
  console.log('Bienvenido');
  //and, or, not
  // >=18 y <=50, >17 y <51, <= 50
} else if (edad > 50 && edad <= 60) {
  // >= 51 y < 61,  <= 60
  console.log('Bienvenido  tiene 5% de descuento');
} else if (60 <= edad <= 115) {
  console.log('bienvenido entrada gratis');
} else {
  console.log('Numero no valido');
}

// array const num = [0,1,2,3,4,5,6]
