console.log('ready');

const main = document.querySelector('.main');

const div = document.createElement('div');
main.appendChild(div);

const textDiv = document.createTextNode('este es el texto de mi div');
div.appendChild(textDiv);

const nombres = [
  'diego',
  'angelica',
  'eduard',
  'raquel',
  'emanuel',
  'yaseen',
  'emilio',
  'nilo',
  'jesus',
  'sergio',
  'dayana',
];
let classLi = 'itemList';
const listaNombres = document.querySelector('.listaNombres');
for (const unNombre of nombres) {
  //creo un li
  let li = document.createElement('li');
  listaNombres.appendChild(li);
  //crea un bloque de texto
  let textoLi = document.createTextNode(unNombre);
  //agrego el texto al LI
  li.appendChild(textoLi);

  //class, id, src, alt, type, value, name,
  //setAttribute(nombre del atributo, valor del atributo)
  li.setAttribute('class', classLi);
}

/// ejercicio
let objetos = [
  {
    name: 'superman',
    image: 'https://media.vandal.net/i/960x720/4-2022/202242610463831_1.jpg',
  },
  {
    name: 'spiderman',
    image: 'https://img2.rtve.es/i/?w=1600&i=1442912677842.jpg',
  },
  {
    name: 'batman',
    image:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png',
  },
];
/*
  1.- Bucle para recorrer el array
  2.- crear el div , y su padre será el body
  3.- crear el h2 , y su padre será el div
  4.- crear el nodo de texto para el titulo, y su padre será el h2
  5.- crear la img , y su padre  será el div
  6.- asigno el atributo src con la ruta de la imagen 
  7.- asigno el atributo alt con el nombre del heroe
*/

for (const heroe of objetos) {
  //creo el div contenedor
  let div = document.createElement('div');
  // indico que es hijo del body
  document.body.appendChild(div);

  let h2 = document.createElement('h2');
  div.appendChild(h2);

  let nombreHeroe = document.createTextNode(heroe.name);
  h2.appendChild(nombreHeroe);

  let imagen = document.createElement('img');
  div.appendChild(imagen);

  imagen.setAttribute('src', heroe.image);
  //diferentes formas de poner una clase de CSS
  //imagen.style = 'width:300px';
  //imagen.classList.add('imgHeroe');
  imagen.setAttribute('class', 'imgHeroe');
  imagen.setAttribute('alt', heroe.name);

  /*
  document.body.innerHTML += `<div>
        <h2>${heroe.name}</h2>
        <img src="${heroe.image}" alt="nombre del heroe" class="imgHeroe" />
    </div>
  `;*/
}
