
/*Seleccion de Datos por producto */
/*Esta linea de codigo se encarga de hacer que cada vez que se aprieta un boton de comprar se
* redirija directamente a una plantilla, y rellene esa plantilla en funcion de los datos del producto a comprar*/
document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ Redirección desde index.html con los datos correctos
    document.querySelectorAll(".comprar-btn").forEach(button => {
        button.addEventListener("click", function () {
            let item = this.closest(".carousel-item");

            if (!item) return; // Evita errores si el botón no está dentro de un producto

            let name = item.dataset.name || "Producto sin nombre";
            let desc = item.dataset.desc || "Sin descripción disponible";
            let img = item.dataset.img || "img/default.png"; // Imagen por defecto si falta

            let url = `producto.html?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}`;
            console.log("Redirigiendo a:", url); // 🔍 Verifica que la URL sea correcta
            window.location.href = url;
        });
    });

    // 2️⃣ Carga de datos en producto.html
    if (window.location.pathname.includes("producto.html")) {
        const params = new URLSearchParams(window.location.search);

        let nombre = params.get("name");
        let imagen = params.get("img");
        let descripcion = params.get("desc");

        console.log("🔍 Parámetros de la URL:", { nombre, imagen, descripcion });

        if (nombre && imagen && descripcion) {
            let nombreElemento = document.getElementById("producto-nombre");
            let imagenElemento = document.getElementById("producto-imagen");
            let descripcionElemento = document.getElementById("producto-descripcion");

            if (nombreElemento && imagenElemento && descripcionElemento) {
                nombreElemento.textContent = nombre;
                imagenElemento.src = imagen;
                imagenElemento.alt = `Imagen de ${nombre}`;
                descripcionElemento.textContent = descripcion;
            } else {
                console.error("❌ No se encontraron los elementos HTML necesarios.");
            }
        } else {
            console.error("❌ No se encontraron datos en la URL.");
        }
    }
});
