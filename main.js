//declaro la funcion saludar
function saludar() {
    alert("bienvenido a nuestra pizzeria");
}
//invoco a la funcion saludar
saludar();

// Definición de la clase Producto para representar las pizzas
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
// Creación de un array para almacenar las variedades de pizzas
const productos = [];

// Agregar objetos Producto al array productos
productos.push(new Producto("pizza muzzarella", 2530));
productos.push(new Producto("pizza napolitana", 2750));
productos.push(new Producto("pizza fugazza", 3000));

//declaro una funcion para mostrar variedades con alert y variables
function mostrarVariedades() {
    alert("te mostraremos nuestras variedades");

    //utilizo forEach para recorrer el array
    productos.forEach(pizza => {
        alert(`${pizza.nombre} $${pizza.precio}`)
    });
}

//llamo a la funcion mostrar Variedades
mostrarVariedades();

let continuarComprando = true; //paara que entre en el while
let compras = ""; //declaro una variable para almacenar las compras
const carrito = []; //array en cero para almacenar los precios para el carrito

function agregarAlCarrito(precio) {
    carrito.push(precio);
}

// Función para sumar los elementos del carrito
function sumarCarrito(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i];
    }
    return total;
}

// Inicio de un bucle while para continuar comprando
while (continuarComprando) {

    // Creación de un mensaje que muestra las opciones de pizza disponibles
    let options = "Ingrese el número correspondiente a la pizza que desea comprar:\n";

    // Recorriendo el array de productos para mostrar las opciones de pizza
    for (let i = 0; i < productos.length; i++) {
        options += `${i + 1}. ${productos[i].nombre} $${productos[i].precio}\n`;
    }

    options += "Para salir, escriba 'ESC'";

    //parseo el string para convertirlo en un numero
    let pizzaSeleccionada = parseInt(prompt(options));

    switch (pizzaSeleccionada) {
        case 1:
            compras += "Pizza de muzzarella\n";
            agregarAlCarrito(2530);
            alert("Pizza de muzzarella comprada");
            break;

        case 2:
            compras += "Pizza de napolitana\n";
            agregarAlCarrito(2750);
            alert("Pizza de napolitana comprada");
            break;

        case 3:
            compras += "Pizza de fugazza\n";
            agregarAlCarrito(3000);
            alert("Pizza de fugazza comprada");
            break;

        case "ESC":
            alert("Saliendo...");
            continuarComprando = false; // Establece la bandera para salir del bucle
            break;

        default:
            alert("Ingresó una opción incorrecta, vuelva a intentar.");
            break;
    }

    if (continuarComprando) {
        continuarComprando = confirm("¿Desea seguir comprando?"); // devuelve true o false
    }
}


// Llamar a la función para obtener el total del carrito
const totalComprado = sumarCarrito(carrito);

alert("Gracias por su compra!");
alert(`
pizzas compradas:
${compras}
total del pedido  
$${totalComprado}
`);

// Para llamar a la función y comenzar la selección de pizzas
seleccionar();

