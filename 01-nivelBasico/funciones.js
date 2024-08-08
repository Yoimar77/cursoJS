function saludar(){
    console.log("Hola mundo");
}
saludar(); // Output: Hola mundo

function sumar(a,b){
    return a+b;
} 
let resultado = sumar(2,3); 
console.log(resultado);// Output: 5
console.log(typeof sumar);// Output: function

function multiplicar(a,b){
    console.log(arguments);//se utiliza el objeto arguments para acceder a todos los argumentos que se pasaron a la función, asi sean mas de 2.
    return a*b;
}
let resultadoMultiplicacion = multiplicar(2,3,4,5,6,7); //muestra todos los argumentos que se pasaron a la función
console.log(resultadoMultiplicacion);// Output: 6
console.log(typeof multiplicar);// Output: function