// Seleccionar el contenedor del carrito
const carritoContainer = document.getElementById("carrito");
const vaciarCarritoButton = document.getElementById("vaciarCarrito");
const comprarCarrito = document.getElementById("comprarCarrito");

// Declarar un array con objetos
const pizzas = [
    {
        id: 1,
        nombre: "muzzarella",
        precio: 2910,
        imagen: "./imagenes/pizzas/muzzarella.jpg",
    },
    {
        id: 2,
        nombre: "fuggazza",
        precio: 2910,
        imagen: "./imagenes/pizzas/fuggazza.jpg",
    },
    {
        id: 3,
        nombre: "napolitana",
        precio: 2910,
        imagen: "./imagenes/pizzas/napolitana.jpg",
    },
    {
        id: 4,
        nombre: "especial",
        precio: 2910,
        imagen: "./imagenes/pizzas/especial.jpg",
    },
];

// Inicializar el carrito desde el almacenamiento local
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para guardar el carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para agregar tarjetas al contenedor
function agregarTarjetas(container, productos) {
    for (const producto of productos) {
        let contenedor = document.createElement("div");
        contenedor.classList.add("card");
        contenedor.innerHTML = `
            <img src="${producto.imagen}" alt="">
            <div class="card-texto">
                <p>${producto.nombre}</p>
                <p>$${producto.precio}</p>
            </div>
            <div class="card-iconos">
                <div class="contador">
                    <img src="./imagenes/shopping/sum.png" alt="+" class="sum-btn" data-product-id="${producto.id}">
                </div>
            </div>
        `;
        container.appendChild(contenedor);
    }
}

// Seleccionar el contenedor de pizzas
const contenedorPizzas = document.querySelector("#pizzas");

// Agregar tarjetas al contenedor
agregarTarjetas(contenedorPizzas, pizzas);

// Agregar un evento a cada botón de suma
const sumButtons = document.querySelectorAll(".sum-btn");
sumButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const productoId = parseInt(event.target.getAttribute("data-product-id"));

        // Buscar el producto por ID en las pizzas
        const producto = pizzas.find(p => p.id === productoId);

        if (producto) {
            // Verificar si el producto ya está en el carrito
            const productoEnCarrito = carrito.find(item => item.id === producto.id);

            if (productoEnCarrito) {
                // Si el producto ya está en el carrito, aumenta la cantidad y recalcula el precio total
                productoEnCarrito.cantidad += 1;
                productoEnCarrito.precioTotal = productoEnCarrito.cantidad * productoEnCarrito.precio;
            } else {
                // Si el producto no está en el carrito, agrégalo con cantidad 1 y calcula el precio total
                const productoConCantidad = { ...producto, cantidad: 1, precioTotal: producto.precio };
                carrito.push(productoConCantidad);
            }

            // Guardar el carrito actualizado en el almacenamiento local
            guardarCarritoEnLocalStorage();

            // Actualizar la vista del carrito
            mostrarCarritoEnHTML();
        }
    });
});

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precioTotal;
    }
    return total;
}

// Función para mostrar el carrito en el HTML
function mostrarCarritoEnHTML() {
    // Limpiar el contenido anterior del carrito
    carritoContainer.innerHTML = `
    <div id="container-numerito">
        <h2>Mi carrito</h2>
        <p id="numerito">0</p> 
    </div>    
    
    `    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        comprarCarrito.classList.add("disabled");
        vaciarCarritoButton.classList.add("disabled");
    } else {
        comprarCarrito.classList.remove("disabled");
        vaciarCarritoButton.classList.remove("disabled");
    }
    ;

    // Iterar a través de los productos en el carrito y mostrarlos con cantidades
    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('carrito-item');

        productoDiv.innerHTML = `
            <p>${producto.nombre} x ${producto.cantidad}</p>
            <p>Total: $${producto.precioTotal}</p>
        `;
        carritoContainer.appendChild(productoDiv);
    });

    // Calcular y mostrar el total del carrito
    const totalCarrito = document.createElement('div');
    totalCarrito.classList.add('carrito-total');
    totalCarrito.innerHTML = `
        <p>Total del Carrito: $${calcularTotalCarrito()}</p>
    `;
    carritoContainer.appendChild(totalCarrito);
    actualizarNumerito();
}

// Llamar a la función para mostrar el carrito en el HTML
mostrarCarritoEnHTML();

// ...

// Función para vaciar el carrito y actualizar la vista
function vaciarCarrito() {
    // Vaciar el carrito (establecerlo como un array vacío)
    carrito = [];

    // Guardar el carrito vacío en el almacenamiento local
    guardarCarritoEnLocalStorage();

    // Actualizar la vista del carrito
    mostrarCarritoEnHTML();
    actualizarNumerito();
}

// Agregar un evento al botón "Vaciar Carrito"

vaciarCarritoButton.addEventListener("click", () => {
    // Llamar a la función para vaciar el carrito
    vaciarCarrito();
    
});

// ...
// Agregar un controlador de eventos al botón "Comprar Carrito"
const comprarCarritoButton = document.getElementById("comprarCarrito");
comprarCarritoButton.addEventListener("click", () => {
    // Mostrar un mensaje de "Compra Exitosa" utilizando alert
    alert("Compra Exitosa");

    // Vaciar el carrito después de la compra
    vaciarCarrito();

    // Actualizar la vista del carrito
    mostrarCarritoEnHTML();

    actualizarNumerito();
});

function actualizarNumerito() {
    let nuevoNumerito = carrito.reduce(
        (acc, producto) => acc + producto.cantidad,
        0
    );

    console.log("Nuevo numerito:", nuevoNumerito);

    const numerito = document.getElementById("numerito");
    console.log("Elemento numerito:", numerito);

    numerito.innerText = nuevoNumerito; // Actualiza el contenido del elemento numerito con el nuevo valor
}

actualizarNumerito();
