function enlaces(icono, ruta, nombre){
    const ROUTE_BASE = "http://127.0.0.1:5500/"

    let Sidebar_enlaces = 
    `<div class="enlace">
        <img src="../assets/img/${icono}.png" alt="">
        <a href="${ROUTE_BASE}${ruta}">${nombre}</a>
    </div>`

    return Sidebar_enlaces
}

export default enlaces;