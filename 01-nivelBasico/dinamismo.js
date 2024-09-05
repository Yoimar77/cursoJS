// 1. Declaración de un objeto constante
// En JavaScript, podemos declarar un objeto usando `const`, lo que significa que no podemos reasignar el objeto a una 
//nueva referencia.
// Sin embargo, eso no significa que el contenido del objeto no pueda cambiar (se pueden modificar sus propiedades).

const persona = {
    nombre: "Juan",
    edad: 30
  };
  
  // Aunque `persona` está declarado como `const`, podemos modificar sus propiedades:
  persona.edad = 31;  // Cambiamos el valor de la propiedad edad
  console.log(persona.edad);  // Salida: 31
  
  // También podemos agregar nuevas propiedades:
  persona.direccion = "Calle Falsa 123";  // Agregamos una nueva propiedad al objeto
  console.log(persona.direccion);  // Salida: "Calle Falsa 123"
  
  // Y eliminar propiedades:
  delete persona.nombre;  // Eliminamos la propiedad nombre
  console.log(persona.nombre);  // Salida: undefined (la propiedad ya no existe)
  
  // Importante: aunque podemos modificar el contenido del objeto, no podemos reasignar el objeto completo.
  // Por ejemplo, esto arrojaría un error:
  // persona = { nombre: "Ana", edad: 25 };  // Error: Assignment to constant variable.
  
  // Ahora veamos cómo podemos restringir aún más las modificaciones en el objeto.
  
  
  // 2. Object.freeze()
  // Este método "congela" un objeto, lo que significa que no podemos agregar, eliminar o modificar ninguna 
  // propiedad de ese objeto.
  // Las propiedades existentes tampoco pueden cambiar su valor.
  
  const auto = {
    marca: "Toyota",
    modelo: "Corolla"
  };
  
  Object.freeze(auto);  // Congelamos el objeto
  
  // Intentar modificar una propiedad no tiene efecto (no arroja error, pero no se cambia el valor).
  auto.marca = "Honda";  // No se puede modificar
  console.log(auto.marca);  // Salida: "Toyota" (el valor original sigue igual)
  
  // Intentar agregar una nueva propiedad tampoco tiene efecto.
  auto.color = "Rojo";  // No se puede agregar
  console.log(auto.color);  // Salida: undefined (la propiedad no existe)
  
  // Intentar eliminar una propiedad también será ignorado.
  delete auto.modelo;  // No se puede eliminar
  console.log(auto.modelo);  // Salida: "Corolla" (la propiedad sigue presente)
  
  // Object.freeze() congela solo los valores directos del objeto. Si tienes objetos anidados, 
  // estos no se congelan automáticamente.
  const personaConDireccion = {
    nombre: "Luis",
    direccion: {
      ciudad: "Madrid",
      calle: "Gran Vía"
    }
  };
  
  Object.freeze(personaConDireccion);  // Congelamos el objeto exterior
  
  // No podemos modificar el nombre de la persona:
  personaConDireccion.nombre = "Carlos";  // No se puede cambiar
  console.log(personaConDireccion.nombre);  // Salida: "Luis"
  
  // Pero aún podemos modificar la ciudad dentro del objeto anidado:
  personaConDireccion.direccion.ciudad = "Barcelona";  // Las propiedades internas NO se congelan
  console.log(personaConDireccion.direccion.ciudad);  // Salida: "Barcelona"
  
  // Si quieres congelar todo en profundidad, puedes usar un método recursivo para hacer un "deep freeze".
  
  
  // 3. Object.seal()
  // El método `Object.seal()` es una opción intermedia entre la flexibilidad completa y `Object.freeze()`.
  // `Object.seal()` permite modificar las propiedades existentes, pero impide agregar o eliminar propiedades.
  
  const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry"
  };
  
  Object.seal(libro);  // Sellamos el objeto
  
  // Podemos modificar propiedades existentes:
  libro.titulo = "El Principito - Edición especial";  // Modificamos el título
  console.log(libro.titulo);  // Salida: "El Principito - Edición especial"
  
  // Pero no podemos agregar nuevas propiedades:
  libro.año = 1943;  // No se puede agregar
  console.log(libro.año);  // Salida: undefined (la propiedad no fue agregada)
  
  // Tampoco podemos eliminar propiedades:
  delete libro.autor;  // No se puede eliminar
  console.log(libro.autor);  // Salida: "Antoine de Saint-Exupéry" (la propiedad sigue ahí)
  
  