console.log('holiss');

const saluda = (nombre) => {
  const promise = new Promise((resolve, reject) => {
    //trusy-->strings, números diferente de 0, true
    //falsy--> null, undefined, 0, ""
    if (nombre) {
      setTimeout(() => {
        resolve(`Hola como estas: ${nombre}`);
      }, 3000);
    } else {
      return reject('No me has enviado un nombre');
    }
  });
  return promise;
};

//console.log(saluda('pepe'));
saluda('pepe').then((response) => {
  console.log(response);
});

saluda('hola')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

const div = document.querySelector('div');
let personajes = [];
fetch('https://swapi.dev/api/people')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    personajes = data.results.map((personaje) => {
      return {
        name: personaje.name,
        hair: personaje.hair_color,
        gender: personaje.gender,
      };
    });
    console.log(personajes);
    paint();
  });
function paint() {
  for (const personaje of personajes) {
    const p = document.createElement('p');
    console.log(p);
    div.appendChild(p);
    //! esto también funciona ya lo he probado, por si no quieren crear el div
    //document.body.appendChild(p);
    //!  qui tenia el error porque puse  que el div era hijo del p y es al contrario
    //p.appendChild(div);
    const text = document.createTextNode(personaje.name);
    p.appendChild(text);
  }
}
