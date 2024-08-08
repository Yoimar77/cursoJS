let nombre = "";
console.log(nombre || "yoimar");//retorna "yoimar", ya que el valor de "nombre" es falso

nombre = "Hola";
console.log(nombre || "yoimar");//retorna "Hola", ya que el valor de "nombre" es verdadero

function funcion1(){
    console.log("funcion1");
    return true;
}

function funcion2(){
    console.log("funcion2");
    return true;
}
let resultado = funcion1() && funcion2();
console.log(resultado);//muestra el mensaje de ambas funciones, ya que ambas retornan true