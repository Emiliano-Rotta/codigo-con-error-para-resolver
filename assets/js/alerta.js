var btnCarrito = document.querySelectorAll("#btn-carrito");
var alerta = document.querySelector(".alert");
var cerrarAlerta = document.querySelector("#btn-cerrar-alerta");

var abrirAlerta = () => {
    alerta.style.display = "flex";
}

btnCarrito.forEach((btn) => {
    btn.onclick = abrirAlerta;
});

var funcionCerrarAlerta = () => {
    alerta.style.display = "none";
}

cerrarAlerta.onclick = funcionCerrarAlerta;
