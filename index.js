let nombre = prompt("Ingrese Nombre");
let apellido = prompt("Ingrese Apellido");
let edad = parseFloat(prompt("Ingrese su Edad"));

console.log("Hola, mi nombre es " + nombre + " mi apellido  es " + apellido + " y tengo " + edad + " años.");


if(edad >= 18){
    console.log("Eres mayor de edad.");
}else{
    console.log("Eres menor de edad.");
}


function datonom(nombre,){
    console.log("Nombre:" + nombre);
}
datonom(nombre);

function datoapell(apellido,){
    console.log("Apellido:" + apellido);
}
datoapell(apellido);


let Vehiculos = ["Azul", "Rojo", "Negro"];

for (let i = 0; i < Vehiculos.length; i++){
    console.log("F-150 Raptor:" + Vehiculos[i]);
}


let opcion = parseFloat(prompt("Ingrese la Opcion que quiera"));

switch (opcion){
    case 1:
        console.log("Has seleccionado la opción 1.");
        break;
    case 2:
        console.log("Has seleccionado la opción 2.");
        break;
    case 3:
        console.log("Has seleccionado la opción 3.");
        break;
    default:
        console.log("Opción no válida.");
        break;
}

function Camionetas(marca, modelo, color, año){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
}

let Camioneta1 = new Camionetas('Ford', 'F-150 Raptor', 'Azul', 2023)
let Camioneta2 = new Camionetas('Ford', 'F-150 Raptor', 'Negro', 2024)
let Camioneta3 = new Camionetas('Ford', 'F-150 Raptor', 'Rojo', 2023)

console.log(Camioneta1);
console.log(Camioneta2);
console.log(Camioneta3);


function Autos(marca, modelo, color, año){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
}
let auto1 = new Autos('Ford', 'Mustang GT Performance', 'Azul', 2024)
let auto2 = new Autos('Ford', 'Mustang GT Performance', 'Gris', 2024)
let auto3 = new Autos('Ford', 'Mustang GT Performance', 'Negro', 2024)

console.log(auto1);
console.log(auto2);
console.log(auto3);

class Personal{
    constructor(nombre, edad, cargo, numero){
        this.nombre = nombre;
        this.edad = edad;
        this.cargo = cargo;
        this.numero = numero;
    }
    info(){
        return`${this.nombre}, ${this.edad}, ${this.cargo}, ${this.numero}`
    }
}

let persona1 = new Personal('Juan Schechtel', 18, 'Gerente', 2314614186);

console.log(persona1.info());


const autos = [
    { marca: "Toyota", modelo: "Corolla", año: 2015, color: "Blanco", precio: 15000 },
    { marca: "Ford", modelo: "Focus", año: 2018, color: "Rojo", precio: 20000 },
    { marca: "Honda", modelo: "Civic", año: 2012, color: "Azul", precio: 12000 },
    { marca: "Toyota", modelo: "Camry", año: 2020, color: "Gris", precio: 25000 },
    { marca: "Ford", modelo: "Mustang", año: 2019, color: "Negro", precio: 30000 }
];
  
function buscarPorMarca(autos, marca) {
    return autos.filter(auto => auto.marca === marca);
}
  
function buscarPorModelo(autos, modelo) {
    return autos.filter(auto => auto.modelo === modelo);
}
  
function buscarPorPrecio(autos, min, max) {
    return autos.filter(auto => auto.precio >= min && auto.precio <= max);
}
  
console.log("Autos de Toyota:");
console.log(buscarPorMarca(autos, "Toyota"));
  
console.log("Autos modelo Focus:");
console.log(buscarPorModelo(autos, "Focus"));
  
console.log("Autos con precio entre 15000 y 25000:");
console.log(buscarPorPrecio(autos, 15000, 25000));

console.log( new Date() )