window.addEventListener("load", () => {
    let botonModoOscuro = document.getElementById("boton-modo-oscuro");
    let body = document.querySelector("body");
    let h1 = document.querySelector("h1");
    let h3 = document.querySelectorAll("h3");
    let botonContadorClicks = document.getElementById("contador-clicks");
    let contador = 0;
    let contadorTecleadas = 0;
    let contadorTotal = document.getElementById("contador-total");
    let contadorTotalTecleadas = document.getElementById("contador-total-tecleadas");
    let visualizadorTecla = document.getElementById("visualizador-tecla");

    botonModoOscuro.addEventListener("click", () => {
        body.classList.toggle("modoOscuro")

        if (body.classList.contains("modoOscuro")) {
            h1.classList.add("modoOscuro-letras")

            for (let i = 0; i < h3.length; i++) {
                h3[i].classList.add("modoOscuro-letras");
            }
        } else {
            h1.classList.remove("modoOscuro-letras")

            for (let i = 0; i < h3.length; i++) {
                h3[i].classList.remove("modoOscuro-letras");
            }
        }
    })

    botonContadorClicks.addEventListener("click", () => {
        contador++

        contadorTotal.innerHTML = "Haz tocado " + contador + " vez/veces!";
    })

    window.addEventListener("keypress", (event) => {
        let key = event.key;

        contadorTecleadas++

        contadorTotalTecleadas.innerHTML = "Haz pulsado " + contadorTecleadas + " vez/veces!";

        visualizadorTecla.innerHTML = "Haz pulsado la tecla " + key;
    })
})