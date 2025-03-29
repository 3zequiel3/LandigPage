console.log("✅ script.js ha sido cargado");

/*Galeria - parte 3*/
document.addEventListener("DOMContentLoaded", function () {
    // Lista de imágenes con su descripción
    const productos = [
        { src: "img/zapatilla1.jpg", nombre: "Zapatilla 1", descripcion: "Zapatilla deportiva moderna." },
        { src: "img/zapatilla2.jpg", nombre: "Zapatilla 2", descripcion: "Zapatilla cómoda para correr." },
        { src: "img/zapatilla3.jpg", nombre: "Zapatilla 3", descripcion: "Zapatilla casual y ligera." }
    ];

    const gallery = document.getElementById("gallery");

    // Crear las imágenes dentro del carrusel
    productos.forEach((producto, index) => {
        const item = document.createElement("div");
        item.className = `carousel-item ${index === 0 ? "active" : ""}`;
        
        const img = document.createElement("img");
        img.src = producto.src;
        img.className = "d-block w-100";
        img.alt = producto.nombre;
        img.dataset.index = index;
    
        // Evento de clic para mostrar detalles
        img.addEventListener("click", function () {
            mostrarDetalle(productos[index]);
        });

        item.appendChild(img);
        gallery.appendChild(item);
    });

    // Función para mostrar la descripción del producto
    function mostrarDetalle(producto) {
        document.getElementById("galeria").style.display = "none"; 
        document.getElementById("product-detail").style.display = "block"; 
        document.getElementById("producto-nombre").textContent = producto.nombre;
        document.getElementById("producto-imagen").src = producto.src;
        document.getElementById("producto-descripcion").textContent = producto.descripcion;
    }

    // Evento para volver a la galería
    document.querySelector(".boton-volver").addEventListener("click", function () {
        document.getElementById("galeria").style.display = "block"; 
        document.getElementById("product-detail").style.display = "none"; 
    });
});
/*Fin parte 3*/

/**Parte 4*/
/*Seleccion de Datos por producto */
/*Esta linea de codigo se encarga de hacer que cada vez que se aprieta un boton de comprar se
* redirija directamente a una plantilla, y rellene esa plantilla en funcion de los datos del producto a comprar*/
/***************/
console.log("✅ script.js ha sido cargado correctamente");

// 📌 Asignar eventos usando DOM a los botones "Comprar"
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".comprar-btn").forEach(button => {
        button.addEventListener("click", function () {
            let item = this.closest(".carousel-item");

            if (!item) {
                console.error("❌ No se encontró el producto.");
                return;
            }

            // Obtener los datos desde el contenido del HTML
            let name = item.querySelector("h3")?.textContent.trim() || "Producto sin nombre";
            let desc = item.querySelector("p")?.textContent.trim() || "Sin descripción disponible";
            let img = item.querySelector("img")?.src || "img/default.png";

            console.log("📤 Enviando datos:", { name, desc, img });

            // Construcción de la URL
            let url = `producto.html?name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}&img=${encodeURIComponent(img)}`;
            window.location.href = url;
        });
    });

    // 📌 Cargar los datos en producto.html
    if (document.getElementById("producto-nombre")) {
        const params = new URLSearchParams(window.location.search);

        let nombre = params.get("name");
        let imagen = params.get("img");
        let descripcion = params.get("desc");

        console.log("🔍 Datos recibidos desde la URL:", { nombre, imagen, descripcion });

        if (nombre && imagen && descripcion) {
            document.getElementById("producto-nombre").textContent = nombre;
            document.getElementById("producto-imagen").src = imagen;
            document.getElementById("producto-imagen").alt = `Imagen de ${nombre}`;
            document.getElementById("producto-descripcion").textContent = descripcion;
        } else {
            console.error("❌ No se encontraron datos en la URL.");
        }
    }
});
/***************/
