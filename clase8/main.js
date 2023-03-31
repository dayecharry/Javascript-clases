//POO PROGRAMACION ORIENTADA A OBJETOS--> JAVA,

// programación estructurada -> definir var, definir función, y luego las usabamos

//POO -> clases, objetos, atributos y métodos

class Persona {
  //conjunto de atributos, de una clase
  nombre;
  apellido;
  edad;
  genero;
  //conjunto métodos, es la funcionalidades de una clase
  constructor(nombre, apellido, edad, genero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
  }
  saludar() {
    //bloque de código con las instrucciones que te haga falta (bucle, condicional, crear variables)
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}
//hago una instancia de la clase de
let persona1 = new Persona('Anacleta', 'ruiz', 65, 'mujer');
persona1.saludar();

let persona2 = new Persona('Angelica', 'Sanchez', 25, 'mujer');
persona2.saludar();

//clase animal, -> tipo, raza, edad, tipocomida
// 1-> Mostrar toda la información del animal(tipo, raza, edad)
// 2-> Muestre solo la comida de ese animal (tipocomida)
//perro, cocker, 5 años, come solo carne

class Vehiculo {
  marca;
  modelo;
  year;
  constructor(mar, mod, year) {
    this.marca = mar;
    this.modelo = mod;
    this.year = year;
  }
  getYear() {
    return this.year;
  }
}
class Coche extends Vehiculo {
  puertas;
  constructor(puertas, marca, modelo) {
    super(marca, modelo, 2023);
    this.puertas = puertas;
  }
  getPuertas() {
    return this.puertas;
  }
}
let coche1 = new Coche(2, 'ferrari', 'spider');
console.log(coche1.getPuertas());
console.log(coche1.getYear());

class Moto extends Vehiculo {
  #ruedas;
  _cilindrada;
  asientos;

  constructor(marca, modelo, year, ruedas, cilindrada, asiento) {
    super(marca, modelo, year);
    this.#ruedas = ruedas;
    this._cilindrada = cilindrada;
    this.asientos = asiento;
  }
  getInfoMoto() {
    return {
      ruedas: this.#ruedas,
      cilindrada: this._cilindrada,
      asientos: this.asientos,
    };
  }
  set cilindrada(nuevoValor) {
    this._cilindrada = nuevoValor;
  }
  get cilindrada() {
    return `cilindrada: ${this._cilindrada}`;
  }
  get ruedas() {
    return this.#ruedas;
  }
  // métodos get -> obtener el valor  de un atributo
  // métodos set -> asignar,  definir, colocar
}
let moto1 = new Moto('yamaha', 'tmax', 2023, 2, 125, 2);
console.log(`La cilindrada de la moto es ${moto1.getInfoMoto().cilindrada}`);
moto1.cilindrada = 200;
console.log(`La cilindrada de la moto es ${moto1.getInfoMoto().cilindrada}`);
console.log(moto1.cilindrada);
console.log(moto1.ruedas);
