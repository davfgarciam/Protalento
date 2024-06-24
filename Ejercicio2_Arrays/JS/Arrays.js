console.log("*** Ejercicio Arrays ***");

//Ejercicio 1
// Paso 1: Crear un array vacío
let numerosAzar = [];

// Paso 2: Generar 10 números al azar y guardarlos en el array
for (let i = 0; i < 10; i++) {
    numerosAzar.push(Math.floor(Math.random() * 100)); // Genera números aleatorios entre 0 y 99
}

// Paso 3: Mostrar el array resultante en la consola
console.log("Array de números al azar:", numerosAzar);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 2

// Paso 1: Pedir al usuario que ingrese el string usando un prompt
let inputString = prompt("Por favor ingresa una serie de números separados por coma:");

// Paso 2: Convertir el string en un array usando split(',')
let arrayFromString = inputString.split(',').map(item => parseInt(item.trim()));

// Paso 3: Mostrar el array resultante en la consola
console.log("Array generado a partir del string:", arrayFromString);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio3
let numeros = [10, 40, 30, 20, 15, 5];

// Paso 1: Ordenar el array de menor a mayor
numeros.sort((a, b) => a - b);

// Paso 2: Mostrar el array ordenado
console.log("Array ordenado de menor a mayor:", numeros);

// Paso 3: Mostrar el número menor (primer elemento del array ordenado)
console.log("Número menor:", numeros[0]);

// Paso 4: Mostrar el número mayor (último elemento del array ordenado)
console.log("Número mayor:", numeros[numeros.length - 1]);

