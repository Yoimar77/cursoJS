//1 while, util para iterar cuando no se sabe el numero de veces que se va a iterar
let i = 1;
while(i<=5){
    console.log(i);//1 2 3 4 5
    i++;
}
//2 do while, util para iterar al menos una vez
let j = 1;
do{
    console.log(j);//1 2 3 4 5
    j++;
}while(j<=5);

//3 for, util para iterar sobre un rango de valores
for(let k=1;k<=5;k++){
    console.log(k);//1 2 3 4 5
}
//4 for of, util para iterar sobre un array
let animales = ['perro', 'gato', 'loro', 'conejo'];
for(let animal of animales){
    console.log(animal);//perro gato loro conejo
}
//5 for in, util para iterar sobre las propiedades de un objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
};

for(let prop in persona){
    console.log(prop);//nombre apellido edad, retorna las propiedades del objeto, no el valor de las propiedades
}
//5.1 util para iterar sobre las propiedades de un objeto y acceder a sus valores
for(let prop in persona){

    console.log(persona,persona[prop]);//nombre Juan apellido Perez edad 25, retorna el nombre de sus propiedades y su valor
}