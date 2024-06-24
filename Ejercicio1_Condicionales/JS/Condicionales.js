console.log("*** Ejercicio Condicionales ***");


var belleza = prompt("¿Eres bellisimo/a?"); // Punto1
var numero = prompt("Ingrese un numero");// Punto2
var numero2 = prompt("Por favor, ingresa un número:");// Punto3
var numeroCliente = prompt("Por favor, ingresa tu número de cliente:");// Punto4
var numeroa = prompt("Por favor, ingresa el primer número:");// Punto5
var numerob = prompt("Ahora, ingresa el segundo número:");// Punto5
var numerox = prompt("Por favor, ingresa el primer número:");// Punto6
var numeroy = prompt("Ingresa el segundo número:");// Punto6
var numeroz = prompt("Finalmente, ingresa el tercer número:");// Punto6
var dia = prompt("Por favor, ingresa un día de la semana (en minúsculas):")// Punto7
var calificacion = prompt("Por favor, ingresa tu calificación (entre 1 y 10):");//Punto8
var topping = prompt("Bienvenido/a. ¿Qué topping te gustaría agregar a tu helado? (oreo, KitKat, brownie)");//Punto9
var programa = prompt("¡Bienvenido/a! Por favor, elige el programa educativo: Course, Carrera o Master.");//Punto10
var tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");//Punto11
var kmsRecorridos = parseFloat(prompt("Ingrese los kilómetros recorridos:"));//Punto11
var litrosConsumidos = parseFloat(prompt("Ingrese los litros consumidos:"));//Punto11


// Punto1
if(belleza == "Si"||belleza =="SI"||belleza =="sí"||belleza =="Sí") {
  console.log("Ciertamente");
} else {
  console.log("No te creo");
}

//------------------------------------------------------------------------------------------------------------------------------------

// Punto2
if(numero % 2 == 0){
  console.log("El número " + numero + " es divisible entre 2.");
} else {
  console.log("El número " + numero + " no es divisible entre 2.");
}

//------------------------------------------------------------------------------------------------------------------------------------

// Verificar si el número es par con alert, Punto3
if (numero2 % 2 == 0) {
    alert("El número " + numero2 + " es par.");
  } else {
    alert("El número " + numero2 + " no es par.");
  }

 //------------------------------------------------------------------------------------------------------------------------------------

 // Verificar si el número de cliente es igual a 1000, Punto4
if (numeroCliente == 1000) {
    console.log("¡Ganaste un premio!");
  } else {
    console.log("Número de cliente: " + numeroCliente + "\nLo sentimos, sigue participando.");
  } 

//------------------------------------------------------------------------------------------------------------------------------------

 // Verificar cuál de los dos números es menor, Punto5
if (numeroa < numerob) {
    console.log("El número " + numeroa + " es menor que " + numerob);
  } else {
    console.log("El número " + numerob + " es menor que " + numeroa);
  } 

//------------------------------------------------------------------------------------------------------------------------------------

// Verificar cuál de los tres números es el mayor, Punto6

if (numerox >= numeroy && numerox >= numeroz) {
    console.log("El número " + numerox + " es el mayor.");
  } else if (numeroy >= numerox && numeroy >= numeroz) {
    console.log("El número " + numeroy + " es el mayor.");
  } else {
    console.log("El número " + numeroz + " es el mayor.");
  }  

//------------------------------------------------------------------------------------------------------------------------------------

// Evaluar el día ingresado usando switch, Punto 7
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes.");
      break;
    case "viernes":
        console.log("¡Es viernes! 🎉");
      break;
    case "sábado":
    case "domingo":
        console.log("Es fin de semana. Descansa!");
      break;
    default:
        console.log("El día ingresado no es lunes, viernes, sábado ni domingo.");
      break;
}

//------------------------------------------------------------------------------------------------------------------------------------

// Verificar si la calificación está dentro del rango válido (1 a 10), Punto 8
if (calificacion >= 1 && calificacion <= 10) {
    // Determinar la clasificación según la calificación
    if (calificacion < 6) {
        console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular");
    } else if (calificacion === 9) {
        console.log("Bien");
    } else if (calificacion === 10) {
        console.log("Excelente");
    }
  } else {
    // Mostrar mensaje de error si la calificación no está en el rango válido
    console.log("La calificación ingresada no está dentro del rango válido (1 a 10).");
  }

//------------------------------------------------------------------------------------------------------------------------------------

  // Precio base del helado sin topping, Punto 9
var precioHelado = 50; // MXN

// Calcular el costo total del helado según el topping elegido
switch (topping) {
  case "oreo":
    precioHelado += 10;
    console.log("El precio total del helado con topping de oreo es: " + precioHelado + " MXN.");
    break;
  case "KitKat":
    precioHelado += 15;
    console.log("El precio total del helado con topping de KitKat es: " + precioHelado + " MXN.");
    break;
  case "brownie":
    precioHelado += 20;
    console.log("El precio total del helado con topping de brownie es: " + precioHelado + " MXN.");
    break;
  default:
    console.log("Lo sentimos, no tenemos este topping.");
    console.log("El precio del helado sin topping es: " + precioHelado + " MXN.");
    break;
}

//------------------------------------------------------------------------------------------------------------------------------------

// Variables para almacenar los costos mensuales y duraciones, Punto 10
var costoMensual;
var duracionMeses;

// Asignar costos mensuales y duraciones según el programa elegido
switch (programa.toLowerCase()) {
  case "course":
    costoMensual = 4999; // MXN
    duracionMeses = 2;
    break;
  case "carrera":
    costoMensual = 3999; // MXN
    duracionMeses = 6;
    break;
  case "master":
    costoMensual = 2999; // MXN
    duracionMeses = 12;
    break;
  default:
    console.log("El programa educativo ingresado no es válido.");
    break;
}

// Verificar si el usuario cuenta con alguna beca y aplicar descuento correspondiente
var beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua)");

var descuento = 0;
switch (beca.toLowerCase()) {
  case "facebook":
    descuento = 0.2; // 20%
    break;
  case "google":
    descuento = 0.15; // 15%
    break;
  case "jesua":
    descuento = 0.5; // 50%
    break;
  default:
    console.log("No has ingresado una beca válida.");
    break;
}

// Calcular precio mensual con descuento
var precioConDescuento = costoMensual * (1 - descuento);
precioConDescuento = precioConDescuento.toFixed(2); // Redondear a 2 decimales

// Calcular precio total del curso
var precioTotal = precioConDescuento * duracionMeses;
precioTotal = precioTotal.toFixed(2); // Redondear a 2 decimales

// Mostrar resultados al usuario
console.log("El precio mensual con descuento para el programa " + programa + " es: $" + precioConDescuento + " MXN.");
console.log("El precio total del curso será: $" + precioTotal + " MXN.");

//------------------------------------------------------------------------------------------------------------------------------------

// Variables para almacenar el precio por kilómetro y el costo total, Punto 11
var precioKilometro;
var costoTotal;

// Determinar el precio por kilómetro según el tipo de vehículo
switch (tipoVehiculo.toLowerCase()) {
  case "coche":
    precioKilometro = 0.20;
    break;
  case "moto":
    precioKilometro = 0.10;
    break;
  case "autobús":
    precioKilometro = 0.50;
    break;
  default:
    console.log("El tipo de vehículo ingresado no es válido.");
    break;
}

// Calcular el costo total sin considerar el extra por litros consumidos
costoTotal = precioKilometro * kmsRecorridos;

// Determinar el extra por litros consumidos
if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
  costoTotal += 5;
} else if (litrosConsumidos > 100) {
  costoTotal += 10;
}

// Mostrar el costo total a pagar al usuario
console.log("El total a pagar por el viaje es: $" + costoTotal.toFixed(2) + " MXN.");

