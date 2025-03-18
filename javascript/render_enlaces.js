import enlaces from "./components/enlaces.js";
import Sidebar_enlaces from "./data/enlaces.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_sidebar = document.getElementById("sidebar-enlaces")
    Sidebar_enlaces.forEach(iterador => {
        let component = enlaces(iterador.icono, iterador.ruta, iterador.nombre)
        contenedor_sidebar.insertAdjacentHTML("beforeend",component)
    });
})