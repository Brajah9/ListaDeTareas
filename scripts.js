const boton = document.querySelector('.button-input');
const input = document.querySelector('.input-text');
const cards = document.querySelector('.card-container');
let listaCards = [];

boton.addEventListener('click', () => {
  if (input.value !== '') {
    listaCards.push(input.value);
    actualizarCards();
    input.value = ''; 
  } else {
    console.log('El input está vacío');
  }
  input.value = '';
});

function actualizarCards() {
    input.placeholder = "Escribe un recordatorio..."
  cards.innerText = ''; 

  listaCards.forEach((item, index) => {
    const elementoDiv = document.createElement('div');
    elementoDiv.classList.add('div-cards-el')
    elementoDiv.textContent = item;
    const botonEliminar = document.createElement('button');
    const botonEditar = document.createElement('button');
    botonEditar.classList.add('botonEditar');
    botonEliminar.classList.add('botonEliminar');
    botonEliminar.textContent = 'Eliminar';
    botonEditar.textContent = 'Editar';
    botonEliminar.addEventListener('click', () => {
      eliminarCard(index);
    });
    botonEditar.addEventListener('click', () => {
      botonEditar.classList.toggle('activo')
      editarCard(index);
    });
    elementoDiv.appendChild(botonEditar);
    elementoDiv.appendChild(botonEliminar);
    cards.appendChild(elementoDiv);
  });
}

function eliminarCard(index) {
  if (!boton.classList.contains('input-hidden')) {
    listaCards.splice(index, 1);
    actualizarCards();
  }else{
    alert("Edita el texto antes de borrarlo")
  }
}

function editarCard(index) {
    
    boton.classList.toggle('input-hidden')
    input.placeholder = "Editar el texto: " + listaCards[index]
    if (input.value !== '') {
        listaCards[index] = input.value;
        actualizarCards();
    }
    input.value = '';
}




