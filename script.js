const pantalla = document.querySelector(".pantalla");// Selecciona el elemento de la pantalla de la calculadora
const botones = document.querySelectorAll(".button");// Selecciona todos los botones de la calculadora

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c") {// limpiar pantalla y la reinicia con "0"
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {// borra el ultimo caracter de la pantalla, si la pantalla tiene un solo caracter o muestra Error! lo reinicia a "0"
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {// evalua la expresion en la pantalla, si hay un error muestra "ERROR!"
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR!";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {//reemplaza el "0" o "ERROR!" por el boton apretado
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})
