// variable para almacenar los nombres de los amigos ingresados
let listaAmigos = [];

// funcion para obtener el texto ingresado por el usuario
function agregarUnAmigo () {  
    let nombreDeAmigo = document.getElementById('valorDeAmigo').value.trim(); //obtiene el texto ingresado por el usuario
    
    if (!validarCampoEntrada(nombreDeAmigo)) {
        return; // Aquí se detiene si el campo está vacío
    }

    //condicion para evitar que el usuario agregue el mismo nombre dos veces
    if (listaAmigos.includes(nombreDeAmigo)) {
        alert('Ese nombre ya fue agregado.');
        limpiarCaja();
        return;
    }

    listaAmigos.push(nombreDeAmigo); // Agrega el nombre al array

    limpiarCaja(); // limpia el campo luego de ingresar un amigo
    actualizarListaAmigos(); // Actualiza la lista visualmente

    return;
}

// validacion para asegurarse de que el campo no este vacio
function validarCampoEntrada(nombre){

    if (nombre == "") {
        alert('Por favor, inserte un nombre.');
        return false;    
    }
    return true;
}

// función para actualizar la lista de amigos
function actualizarListaAmigos () {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
        // Aquí vamos a crear el <li>

        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);

    }

}

/* función para sortear los amigos */
function sortearAmigo () {
    
    //comprobar si el array amigos no esta vacio
    if (listaAmigos.legth === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    //generamos el indice aletorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    //obtenemos el nombre sorteado
    let amigoSorteado = listaAmigos[indiceAleatorio];

    //mostramos el resultado
    document.getElementById('resultado').innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}

/* Limpiar el campo de entrada: Después de añadir el nombre, 
restablecer el campo de texto a una cadena vacía. */

function limpiarCaja () {
    document.querySelector('#valorDeAmigo').value = "";
}

