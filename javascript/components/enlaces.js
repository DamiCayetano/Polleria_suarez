function enlaces(icono, ruta, nombre){
    const ROUTE_BASE = "https://damicayetano.github.io/Polleria_suarez/"

    let Sidebar_enlaces = 
    `<div class="enlace">
        <img src="../assets/img/${icono}.png" alt="">
        <a href="${ROUTE_BASE}${ruta}">${nombre}</a>
    </div>`

    return Sidebar_enlaces
}

export default enlaces;
