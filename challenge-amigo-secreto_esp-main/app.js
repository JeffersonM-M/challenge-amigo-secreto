// Lista para guardar los nombres ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
//El método .trim() elimina espacios en blanco al inicio y al final de una cadena, pero no quita los de en medio.
    let nombre = input.value.trim();

    // Validación: no permitir entradas vacías ===
    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar a la lista de amigos []
    amigos.push(nombre);

    // Limpiar campo y actualizar lista en pantalla
    input.value = "";
    actualizarLista();
}

// Función para mostrar la lista de amigos en el HTML
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista previa

    //sintaxis abreviada para escribir funciones '=>' (amigos.forEach(function(amigo))
    amigos.forEach(amigo => {
        let li = document.createElement('li'); //Crea un nuevo elemento HTML <li> de forma dinámica, solo existe en memoria
        li.textContent = amigo; //Asigna el texto del amigo actual como contenido del <li>
        lista.appendChild(li); //Inserta el <li> recién creado dentro del <ul> que tenemos en lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar resultado
    let resultado = document.getElementById('resultado');
    // <strong> etiqueta HTML de énfasis fuerte, da importancia semántica al texto <>muestran en negrita</>
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}