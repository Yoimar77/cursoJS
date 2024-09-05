// 1. if


let numero = 10; 
if (numero > 5) {
  // Si la condición es verdadera, se ejecuta este bloque
  console.log("El número es mayor que 5");
}
// Si la condición no se cumple, el bloque de código es ignorado


// 2. if...else
// La estructura if...else permite ejecutar un bloque de código si la condición es verdadera y otro bloque si es falsa.

let edad = 18;  

if (edad >= 18) {
  // Si la condición es verdadera, se ejecuta este bloque
  console.log("Eres mayor de edad.");
} else {
  // Si la condición es falsa, se ejecuta este otro bloque
  console.log("Eres menor de edad.");
}


// 3. if...else if...else
// Esta estructura evalúa múltiples condiciones. Si una es verdadera, se ejecuta el bloque correspondiente.

let temperatura = 30;  
if (temperatura > 30) {
  // Si la temperatura es mayor que 30, se ejecuta este bloque
  console.log("Hace mucho calor.");
} else if (temperatura >= 15) {
  // Si la primera condición es falsa, pero esta es verdadera, se ejecuta este bloque
  console.log("El clima es templado.");
} else {
  // Si ninguna condición es verdadera, se ejecuta el bloque final
  console.log("Hace frío.");
}
// En este caso, solo uno de los bloques se ejecutará dependiendo de cuál condición se cumpla.


// 4. Operador ternario
// Es una forma abreviada de escribir if...else. Ideal para condiciones simples con dos resultados.

let esAdulto = edad >= 18 ? "Mayor de edad" : "Menor de edad";  // Evaluamos si es adulto o no usando el operador ternario
console.log(esAdulto);  // Mostramos el resultado
// Si la condición es verdadera, se asigna "Mayor de edad", si es falsa, "Menor de edad".


// 5. switch
// La estructura switch evalúa una expresión y ejecuta el código correspondiente al valor que coincida con uno de los casos.

let fruta = "manzana";  // Definimos una variable fruta

switch (fruta) {
  case "naranja":
    // Si fruta es "naranja", se ejecuta este bloque
    console.log("La fruta es una naranja");
    break;  // El break evita que se ejecuten los siguientes casos
  case "manzana":
    // Si fruta es "manzana", se ejecuta este bloque
    console.log("La fruta es una manzana");
    break;
  case "plátano":
    // Si fruta es "plátano", se ejecuta este bloque
    console.log("La fruta es un plátano");
    break;
  default:
    // Si ningún caso coincide, se ejecuta este bloque por defecto
    console.log("Fruta desconocida");
}
// switch es útil cuando tienes múltiples valores posibles para una variable y quieres manejar cada uno de manera específica.


// 6. Condiciones con operadores lógicos (AND, OR, NOT)
// Puedes combinar múltiples condiciones usando operadores lógicos como && (AND), || (OR), y ! (NOT).

// Ejemplo con AND (&&)
let hora = 14;  // Definimos una variable hora

// Evaluamos si es de día (entre las 6 AM y las 6 PM)
if (hora >= 6 && hora <= 18) {
  // Ambas condiciones deben ser verdaderas para ejecutar este bloque
  console.log("Es de día");
} else {
  console.log("Es de noche");
}
// Si ambas condiciones son verdaderas, el mensaje será "Es de día", de lo contrario, "Es de noche".


// Ejemplo con OR (||)
let diaDeSemana = "sábado";  // Definimos una variable diaDeSemana

// Evaluamos si es un día de fin de semana
if (diaDeSemana === "sábado" || diaDeSemana === "domingo") {
  // Solo una de las dos condiciones debe ser verdadera para ejecutar este bloque
  console.log("Es fin de semana");
} else {
  console.log("Es día laboral");
}
// Si es sábado o domingo, se muestra "Es fin de semana", de lo contrario, se muestra "Es día laboral".


// Ejemplo con NOT (!)
let estaLloviendo = false;  // Definimos una variable que indica si está lloviendo

// Evaluamos si NO está lloviendo
if (!estaLloviendo) {
  // El operador ! invierte el valor de la condición (si es false, se convierte en true)
  console.log("No está lloviendo, puedes salir.");
} else {
  console.log("Está lloviendo, mejor quédate adentro.");
}
// Si estaLloviendo es false, el mensaje será "No está lloviendo", de lo contrario, "Está lloviendo".
