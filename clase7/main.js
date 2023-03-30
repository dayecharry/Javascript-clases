console.log('Este es el console 1');

fetch('https://starwars-server.vercel.app/characters')
  .then((resp) => resp.json)
  .then((data) => {
    console.log('este es el console 2');
    //console.log(data);
  });

console.log('este es el console 3');

//2,1,3
//1,3,2

const getDataAPI = async () => {
  const response = await fetch('https://starwars-server.vercel.app/characters');
  const respuestaJson = await response.json();
  return respuestaJson;
};
/*const inicializar = async () => {
  const resp = await getDataAPI();
  console.log(resp);
};
inicializar();*/
//console.log(resp);

const apiRickAndMorty = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const respuestJSON = await response.json();
    return respuestJSON;
  } catch (error) {
    //p.innerHTML = "esta pagina no está disponible"
    console.log(error);
  }
};

/*const initRickMorty = async () => {
  const respRick = await apiRickAndMorty();
  console.log(respRick);
};
initRickMorty();*/

const init = async () => {
  const resp = await getDataAPI();
  console.log(resp);
  const respRick = await apiRickAndMorty();
  console.log(respRick);
};
init();
