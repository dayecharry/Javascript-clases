console.log('holissss');

//selectores de css, .class, #id, div,

const title = document.querySelector('.js-title');
console.log(title);

const paragraph = document.querySelector('p');
console.log(paragraph);
paragraph.textContent = 'este parrafo ha sido modificado desde js';

const div = document.querySelector('#container');
div.textContent = 'holisss';
div.innerHTML = '<h2>este es un subtitulo</h2>';

const paragraph2 = document.querySelector('.par2');
// add añade una o mas clases
paragraph2.classList.add('purple');

const ulElement = document.querySelector('ul');

//remove elimina una o mas clases
ulElement.classList.remove('soyLaUl');

// verificar si un elemento contiene una clase
console.log(paragraph.classList.contains('js-title'));

if (paragraph.classList.contains('js-title')) {
  paragraph.textContent = ' esto es un titulo';
} else {
  paragraph.textContent = 'esto es cualquier cosa menos un titulo';
}

const listaLink = document.querySelectorAll('.link');
console.log(listaLink);

for (const li of listaLink) {
  li.classList.add('red');
}

const image = document.querySelector('img');
image.src =
  'https://elcomercio.pe/resizer/mtwIIULJAH5Rqta3Wgw4DaVmH68=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NYIU4FINCFEIDKES4IKROQT7RI.jpg';

const imageFondo = document.querySelector('.imageFondo');

imageFondo.src = './images/z.webp';
