let persona = {
    nombre: "yoimar",
    apellido: "lopez",
    edad: 25,
    direccion: "barrio la julia",
}

console.log(persona.nombre); // "yoimar"
console.log(persona.apellido); // "lopez"
console.log(persona["edad"]); // 25
console.log(persona["direccion"]); // "barrio la julia"

// Añadir propiedades a un objeto
persona.telefono = "555-555-5555";
console.log(persona.telefono); // "555-555-5555"


// Eliminar propiedades de un objeto
delete persona.direccion;
console.log(persona.direccion); // undefined

// Comprobar si una propiedad existe en un objeto
console.log("nombre" in persona); // true
console.log("direccion" in persona); // false

// Obtener el tamaño de un objeto
console.log(Object.keys(persona).length); // 4

//asignar el valor a una propiedad de un objeto
persona.nombre = "juan";
persona["apellido"] = "perez";
console.log(persona.nombre); // "juan"
console.log(persona.apellido); // "perez"

