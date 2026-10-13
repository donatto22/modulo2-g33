const notas = [13, 16, 19, 18, 11, 10, 12, 9]
const notas2 = [13, 12, 11, 5, 5, 20, 10]

function verAprobadosDesaprobados(arreglo) {
    console.log("Aprobados", arreglo.filter(n => n >= 11).length)
    console.log("Desaprobados", arreglo.filter(n => n < 11).length)
}

function calcularDescuento(precio, descuento) {
    console.log(precio - (precio * descuento / 100))
}

calcularDescuento(100, 10)
calcularDescuento(345, 40)

calcularDescuento(300, 29)


// --------------------
function sumar(num1, num2) {
    return num1 + num2
}

const resultado = sumar(1, 2)
console.log(resultado * 100)

// ---------------
const edades = [10, 20, 30, 12, 18, 16, 15]
const edades2 = [13, 17, 15, 15, 18, 75]
const edades3 = [20, 19, 15, 24, 25, 28]

// Se busca saber cuantos mayores de edad hay
// ! Usar funciones
// .length - indica la cantidad de elementos que tiene la lista

function mayoresDeEdad(lista) {
    console.log(lista.filter(n => n >= 18).length)
}

mayoresDeEdad(edades3)

// -------------------
const nombres = ["Luis", "Carlos", "Rodrigo", "Manuel", "Victoria"]

// Se necesita tener todos los nombre en mayúsculas
// No importa la lista de nombres de los alumnos que se tenga
function nombreMayuscula(nombres) {
    let resultado = []

    for (let i = 0; i < nombres.length; i++) {
        resultado[i] = nombres[i].toUpperCase()
    }

    return resultado
}

console.log(nombreMayuscula(nombres))

// -----------------
const alumnos = [
    { nombre: "Pepe", edad: 16, promedio: 13 },
    { nombre: "María", edad: 20, promedio: 11 },
    { nombre: "Donatto", edad: 17, promedio: 17 },
    { nombre: "Noa", edad: 16, promedio: 12 },
]

// Se necesita obtener a todos los alumnos
// que sean mayores a 16 y hayan aprobado con un promedio
// mayor a 13. 

function mayoresAprobados(listaAlumnos) {
    for (let i = 0; i < listaAlumnos.length; i++) {
        if (listaAlumnos[i].edad > 16 && listaAlumnos[i].promedio > 13) {
            console.log(listaAlumnos[i].nombre)
        }
    }
}

mayoresAprobados(alumnos)

const objeto = {
    nombre: "teclado",
    precio: 120
}

console.log(objeto.precio)
const { precio } = objeto

console.log(precio)

// 

// function enviarMensaje(message) {
//     console.log(message)
// }

// // arrow function
// const enviarMensaje = (message) => {
//     console.log(message)
// }

// operador ternario
const edad = 18
const sueldo = 1200

if (edad >= 18 && sueldo >= 1200)
    console.log("Bienvenido la mundo laboral")
else
    console.log("Aún estás en camino")

// condición ? si es verdad : si es falso
edad >= 18 && sueldo >= 1200 ? console.log("Bienvenido la mundo laboral") : console.log("Aún estás en camino")
