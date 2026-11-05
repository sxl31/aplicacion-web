
let contador = 0;

let registros = [];

// Elementos del HTML
const elementoContador = document.getElementById("contador");

const elementoMensaje = document.getElementById("mensaje");

const tablaRegistros = document.getElementById("tablaRegistros");

const btnIncrementar = document.getElementById("btnIncrementar");

const btnReiniciar = document.getElementById("btnReiniciar");


// Funcion para incrementar el contador
function incrementarContador() {

    contador++;

    // Obtener la hora actual
    const ahora = new Date();

    const horaFormateada = ahora.toLocaleTimeString("es-CO", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // Crear nuevo registro
    const nuevoRegistro = {
        id: Date.now().toString(),
        numero: contador,
        hora: horaFormateada
    };

    // Agregar registro al historial
    registros.unshift(nuevoRegistro);

    // Actualizar contador
    elementoContador.textContent = contador;

    // Cambiar color cuando supera los 10
    if (contador > 10) {
        elementoContador.classList.add("contadorAlto");
        elementoMensaje.style.display = "block";
    }

    // Actualizar tabla
    mostrarRegistros();
}


// Funcion para reiniciar el contador
function reiniciarContador() {

    contador = 0;

    registros = [];

    elementoContador.textContent = contador;

    elementoContador.classList.remove("contadorAlto");

    elementoMensaje.style.display = "none";

    mostrarRegistros();
}


// Funcion para mostrar los registros
function mostrarRegistros() {

    tablaRegistros.innerHTML = "";

    if (registros.length === 0) {

        tablaRegistros.innerHTML = `
            <p class="vacio">Todavía no hay registros</p>
        `;

        return;
    }

    registros.forEach((item, index) => {

        const fila = document.createElement("div");

        fila.className = "tr";

        if (index % 2 === 0) {
            fila.classList.add("trEven");
        }

        fila.innerHTML = `
            <div class="td cellNumero">${item.numero}</div>
            <div class="td cellHora">${item.hora}</div>
        `;

        tablaRegistros.appendChild(fila);

    });

}


// Eventos de los botones
btnIncrementar.addEventListener("click", incrementarContador);

btnReiniciar.addEventListener("click", reiniciarContador);
