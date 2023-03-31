/// pedir a la API de Rick  todas las location, y crear una tarjeta en el HTML por cada localización. Haciendo uso de DOM AVANZADO, (solo me voy a quedar con el nombre, tipo y la imagen)

const main = document.querySelector('main');
const input = document.querySelector('.search');

// Paso 2 hago una funcion para pedir datos
const getDataApi = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/location');
    const resJson = await response.json();
    return resJson.results;
  } catch (error) {
    console.log(error);
  }
};
const mapear = (locations) => {
  const cleanData = locations.map((loc) => ({
    id: loc.id,
    name: loc.name,
    type: loc.type,
  }));
  return cleanData;
};
//función  que me va a permitir crear los div, de un array dado
const pintarDatos = (locations) => {
  main.innerHTML = '';
  for (const location of locations) {
    // innerHTML
    /*main.innerHTML += `
        <div class = "card">
            <h3>${location.name}</h3>
            <p>${location.type}</p>
        </div>
    `;*/

    //creo los elementos del DOM
    const div = document.createElement('div');
    main.appendChild(div);

    const h3 = document.createElement('h3');
    div.appendChild(h3);

    const titulo = document.createTextNode(location.name);
    h3.appendChild(titulo);

    const p = document.createElement('p');
    div.appendChild(p);
    p.textContent = location.type;

    div.classList.add('card');
  }
};

const filtrarDatos = (datosMapeados) => {
  /*
    1.- escuchar evento sobre el input (addEventListener)
    2.- cojo el valor del input
    3.- hago el filtro con los datos del input --> filter retorna un nuevo array
    4.- llamar a la función pintardatos(arrayfiltrado)
  */
  input.addEventListener('keyup', (ev) => {
    // recogemos los datos de los inputs
    const inputValue = ev.target.value;
    //compruebo los value del inputs
    console.log(inputValue);
    // filtros los objetos que incluyan el valor del value
    const datosFiltrados = datosMapeados.filter((location) => {
      //filtros los objetos que incluyan el valor del value
      return location.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    //ejecuto la función pintar datos los  el nuevo array.
    pintarDatos(datosFiltrados);
  });
};

// función  empieza a hacer la petición al servidor
const inicializar = async () => {
  // tengo los datos de la API guardados en locations
  const locations = await getDataApi();
  // almaceno en la variable datosMapeados lo que retorna la función mapear();
  // Le envio por parámetro el array locations con lo que ha devuelto la API
  const datosMapeados = mapear(locations);
  //compruebo los nuevos datos, la data limpia
  console.log(datosMapeados);
  // ejecuto la función encargada de crear los divs en el html
  pintarDatos(datosMapeados);
  // ejecutar la funcion para el proceso de filtrado
  filtrarDatos(datosMapeados);
};
// levanto el proyecto
inicializar();
