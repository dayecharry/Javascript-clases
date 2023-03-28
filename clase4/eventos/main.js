console.log('lista pa la playa');
///eventos--> click, mouseover, scroll, keyup

const btn = document.querySelector('.btn');
console.log(btn);

//selecciono el parrafo del HTML
const msj = document.querySelector('.msj');

//esta es una funcion manejadora de eventos
//las funciones manejadoras de eventos NO llevan return

function heHechoClick() {
  console.log('me han clicado');
  msj.textContent = 'me ha clicado';
}

// heHechoClick es una funcion callback
//click, keyup, onInput, scroll,
btn.addEventListener('click', heHechoClick);

/************************ */

const subTitle = document.querySelector('.subTitle');

function clickSubtitle() {
  console.log('he hecho click en el titulo');
  /*if (subTitle.classList.contains('red')) {
    subTitle.classList.remove('red');
  } else {
    subTitle.classList.add('red');
  }*/

  subTitle.classList.toggle('red');
}

subTitle.addEventListener('click', clickSubtitle);

/******** formulario */
// al escribir sobre los input mostrar en el  div de preview la información que escribe el usuario
const nameInput = document.querySelector('.name');
const urlImg = document.querySelector('.urlImg');
const nameUser = document.querySelector('.nameUser');
const imgUser = document.querySelector('.imgUser');

function handleNameUser(event) {
  console.log(event);
  nameUser.textContent = event.target.value;
}
nameInput.addEventListener('keyup', handleNameUser);

function handleImagUrl(event) {
  console.log('img');
  imgUser.src = event.target.value;
}
urlImg.addEventListener('change', handleImagUrl);
