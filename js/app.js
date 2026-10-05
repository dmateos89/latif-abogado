// =========================
// LATIF ABOGADO
// =========================


// =========================
// MENÚ MÓVIL
// =========================

const botonMenu = document.getElementById("menu-toggle");
const navegacion = document.getElementById("nav-principal");

if (botonMenu && navegacion) {

    botonMenu.addEventListener("click", function () {

        const menuAbierto = navegacion.classList.toggle("activo");

        botonMenu.classList.toggle("activo");

        botonMenu.setAttribute(
            "aria-expanded",
            menuAbierto
        );

        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

    });


    // CERRAR MENÚ AL PULSAR UNA OPCIÓN

    const enlacesMenu = navegacion.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            navegacion.classList.remove("activo");
            botonMenu.classList.remove("activo");

            botonMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botonMenu.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        });

    });


    // CERRAR MENÚ SI VOLVEMOS A TAMAÑO DE ESCRITORIO

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navegacion.classList.remove("activo");
            botonMenu.classList.remove("activo");

            botonMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botonMenu.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        }

    });

}


// =========================
// FORMULARIO DE CONTACTO
// =========================

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        alert(
            "Formulario de demostración.\n\n" +
            "En la versión definitiva la consulta será enviada al abogado."
        );

    });

}