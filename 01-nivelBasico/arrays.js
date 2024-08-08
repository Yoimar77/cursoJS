let animales = ["perro", "gato", "conejo"];
console.log(animales); // ["perro", "gato", "conejo"]

// Agregar un elemento al final del array
animales.push("loro");
console.log(animales); // ["perro", "gato", "conejo", "loro"]

// Agregar un elemento al inicio del array
animales.unshift("leon");
console.log(animales); // ["leon", "perro", "gato", "conejo", "loro"]


// Eliminar un elemento del array
let indice = animales.indexOf("gato");//obtiene el indice del elemento a eliminar, en este caso de gato, si no esta en el array retorna -1
animales.splice(indice, 1);//elimina el elemento del array en el indice especificado, y el segundo parametro es la cantidad de elementos a eliminar
console.log(animales); // ["leon", "perro", "conejo", "loro"]

// Eliminar todos los elementos del array
animales.length = 0;
console.log(animales); // []

//agregar un elemento al array con un indice especifico
animales[1] = "raton";
console.log(animales); // ["raton"]

//obtener el tamanio del array
console.log(animales.length); // 1
