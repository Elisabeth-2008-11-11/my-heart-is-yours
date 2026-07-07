// =========================
// MY HEART IS YOURS
// Script principal
// =========================

const loader = document.getElementById("loader");
const cover = document.getElementById("cover");
const book = document.getElementById("book");
const openBook = document.getElementById("openBook");
const letter = document.getElementById("letter");
const nextPage = document.getElementById("nextPage");

// Ocultar pantalla de carga
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
});

// Carta
const carta = `Mi reina...

Hay momentos que simplemente pasan...

y hay otros que cambian una vida para siempre.

Conocerte en el INED La Estancia fue el momento que cambió la mía.

Todavía recuerdo el día en que te vi.

Fue como si mi corazón ya supiera que algún día iba a pertenecer al tuyo.

Desde ese instante decidí hacer todo lo posible por conquistarte.

Después llegaron nuestras salidas en moto...

las bromas...

las risas...

y aquel beso que cambió mi vida para siempre.

Gracias por cada abrazo.

Gracias por cada beso.

Gracias por cada momento.

Gracias por hacerme el hombre más feliz del mundo.

Quiero graduarme contigo.

Viajar contigo.

Conocer Japón.

Caminar por España.

Recorrer el mundo tomados de la mano.

Casarme contigo.

Formar una familia.

Y seguir amándote hasta el último día de mi vida.

Te amo muchísimo.

Con todo mi corazón.

Daniel ❤️`;

// Escribir letra por letra
function escribirCarta() {

    letter.innerHTML = "";

    let i = 0;

    function escribir() {

        if (i < carta.length) {

            letter.innerHTML += carta.charAt(i);

            i++;

            setTimeout(escribir, 25);

        }

    }

    escribir();

}

// Abrir libro
openBook.addEventListener("click", () => {

    cover.style.display = "none";

    book.classList.remove("hidden");

    escribirCarta();

});

// Continuar
nextPage.addEventListener("click", () => {

    window.location.href = "gallery.html";

});