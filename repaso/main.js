const tasks = [
  { name: 'Viaje en yate por el mediterráneo', completed: false },
  { name: 'Ganarme la lotería', completed: false },
  { name: 'Saltar en paracaídas', completed: false },
  { name: 'Practicar JavaScript', completed: true },
  { name: 'Practicar MONGO', completed: true },
  { name: 'Ver un peli', completed: false },
];
//pintar en el HTML un checkbox dentro de un li por  cada tarea,
//  Y marcar la tarea como hecha ponerle una clase subrayado
/*
   X 1.- Defino una constante con la ul que esta en el html, querySelector.
   X 2.- Recorro el array de tasks
   X 3.- crear un li, por cada tarea -> createElement, indico quien es su padre. (ul) 
   X 4.- crear un nodo de texto con la tarea e indicar que es hijo del li
    5.- crear un checkbox, que sera hijo de cada li
    6.- escuchar evento sobre los checkbox, para cambiar la propiedad completed .
    7.- añadir o quitar la clase de css tachado
*/

// traer del html la UL
const ulElement = document.querySelector('.listTasks');

// funcion que permite renderizar en el HTML la lista de tareas
function paintTask() {
  ulElement.innerHTML = '';

  let i = 0;
  // recorrer el array de tareas  para ir creando cada li
  for (const eachTask of tasks) {
    const li = document.createElement('li');
    ulElement.appendChild(li);

    // en caso que el objeto de la tarea tenga la propiedad completed en true, le añado la clase de tachado
    if (eachTask.completed) {
      li.classList.add('tachado');
    }
    // se crea cada checkbox y lo añadimos al li
    const checkbox = document.createElement('input');
    li.appendChild(checkbox);
    checkbox.setAttribute('type', 'checkbox');
    // le asignamos un identificado al input, que corresponde con la posicion del elemento en array,
    //la variable i fue creada antes del ciclo for
    checkbox.setAttribute('id', i);
    checkbox.classList.add('item');

    const textLi = document.createTextNode(eachTask.name);
    li.appendChild(textLi);
    // incremento la variable i para luego poder cambiar el id del input
    i++;
  }
  // selecciono todos los input para luego escuchar el evento change
  const allCheckbox = document.querySelectorAll('.item');
  for (const eachCheckbox of allCheckbox) {
    //click, change, mouseover, keyup, change
    eachCheckbox.addEventListener('change', pepino);
  }
}

paintTask();

function pepino(ev) {
  //el id del elemento clicado
  console.log(ev.target.id);
  const position = ev.target.id;
  console.log(tasks[position]);
  // modificar la propiedad completed  asignandole el valor contrario
  tasks[position].completed = !tasks[position].completed;
  paintTask();
}
