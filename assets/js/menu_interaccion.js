document.addEventListener("DOMContentLoaded", function () {
    const categorias = document.querySelectorAll(".categoria");
    const cards = document.querySelectorAll(".cards");

    categorias.forEach(categoria => {
        categoria.addEventListener("click", () => {
            const categoriaSeleccionada = categoria.getAttribute("data-categoria");

            // Ocultar todas las cards
            cards.forEach(card => {
                card.style.display = "none";
            });

            // Mostrar solo las cards de la categoría seleccionada
            cards.forEach(card => {
                if (card.getAttribute("data-categoria") === categoriaSeleccionada) {
                    card.style.display = "block";
                }
            });
        });
    });
});
