function sidebar(logo, usuario, nombre, cargo, icono, cerrar){
    let Component_sidebar = 
    `<div class="sidebar-logo">
        <img src="../assets/img/${logo}.png" alt="logo">
    </div>
    <div class="sidebar-usuario">
        <div class="usuario-img">
            <img src="../assets/img/${usuario}.png" alt="">
        </div>
        <div class="usuario-datos">
            <div class="datos-nombre">
                <h3>${nombre}</h3>
            </div>
            <div class="datos-rol">
                <h3>${cargo}</h3>
            </div>
        </div>
    </div>
    <div class="sidebar-enlaces" id="sidebar-enlaces">
        
    </div>
    <div class="sideber-cerrar">
        <img src="../assets/svg/${icono}.svg" alt="">
        <h3>${cerrar}</h3>
    </div>`

    return Component_sidebar;
}

export default sidebar;