let user= {
    name: "Yoimar",
    age: 25,
    email: "celumania@gmail.com",
    password: "123456",
    direccion:{
        calle: "Calle 123",
        numero: "123",
        ciudad: "Bogotá"
    },
    //función anoníma
    login: function() {
        console.log("Welcome " + this.name);
    }
}