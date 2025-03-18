import sidebar from "./components/sidebar.js";
import Data_sidebar from "./data/sidebar.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_sidebar = document.getElementById("sidebar")
    Data_sidebar.forEach(iterador => {
        let component = sidebar(iterador.logo, iterador.usuario, iterador.nombre, iterador.cargo, iterador.icono, iterador.cerrar)
        contenedor_sidebar.insertAdjacentHTML("beforeend", component)
    });
})