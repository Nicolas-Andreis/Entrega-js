//declaro la funcion saludar
function saludar() {
    alert("bienvenido a nuestra pizzeria");
}
//invoco a la funcion saludar
saludar();

//declaracion de variables globales por el scoope
let muzzarella = "1-pizza muzzarella  $2530";
let napolitana = "2-pizza napolitana $2750";
let fugazza = "3-pizza fugazza  $3000";

//declaro una funcion para mostrar variedades con alert y variables
function mostrarVariedades() {
    alert("te mostraremos nuestras variedades");

    alert(`
    ${muzzarella}
    ${napolitana}
    ${fugazza}`);
}

mostrarVariedades();

let continuarComprando = true; //paara que entre en el while
let compras = ""; //declaro una variable para almacenar las compras
let totalComprado = 0; //declaro una variable en cero para almacenar el valor de las pizzas compradas

while (continuarComprando) {

    let pizzaSeleccionada = parseInt(prompt(`
        Ingrese el número correspondiente a la pizza que desea comprar:
        1. Muzzarella   $2530
        2. Napolitana   $2750
        3. Fugazza      $3000
        Para salir, escriba "ESC"`));

    switch (pizzaSeleccionada) {
        case 1:
            compras += "Pizza de muzzarella\n";
            totalComprado += 2530;
            alert("Pizza de muzzarella comprada");
            break;

        case 2:
            compras += "Pizza de napolitana\n";
            totalComprado += 2750;
            alert("Pizza de napolitana comprada");
            break;

        case 3:
            compras += "Pizza de fugazza\n";
            totalComprado += 3000;
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


alert("Gracias por su compra!");
alert(`
pizzas compradas:
${compras}
total del pedido  
$${totalComprado}
`);

// Para llamar a la función y comenzar la selección de pizzas
seleccionar();

