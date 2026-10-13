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


// -----------------
// parámetros opcionales

function saludar(nombre = "Invitado") {
    console.log("Hola, " + nombre)
}

saludar()

// Una tienda vende un polo a 100 soles. Algunos días tiene descuento y
// otros días no. Crea una función que reciba elprecio y opcionalmente el
// descuento. nos debe mostrar el precio final

function precioDescuento(precio, descuento = 0) {
    console.log(precio - (precio * descuento / 100))
}

precioDescuento(100) // 100
precioDescuento(100, 20) // 80

// -----------------------
/*
Una emprea de delivery cobra S/.2 por kilómetro, pero el costo mínimo
de cualquier envío es de S/5. Se busca una función que recba los kilometros
y devuelva lo que se debe pagar
*/

function costoDelivery(kilometro) {
    kilometro < 3 ? console.log("El costo es 5 soles") : console.log("El costo es " + kilometro * 2 + " soles")
}

costoDelivery(1) // 5
costoDelivery(3) // 6
costoDelivery(10) // 20

// -------
/*
Un cine cobra 8 soles a los menores de 12 años,
15 soles a quienes tienen entre 12 a 59 años y 
10 soles a quienes tienen 60 años o más. Se necesita una función
que reciba la edad y devuelva el precio de la entrada
*/

function precioEntrada(edad) {
    if (edad < 12) {
        console.log("El costo es S/8")
    } else if (edad < 60) {
        console.log("El costo es S/15")
    } else {
        console.log("El costo es S/10")
    }
}

precioEntrada(8) // 8
precioEntrada(25) // 15
precioEntrada(65) // 10

// -------------
const productos = [
    { nombre: "Cuaderno", precio: 8 },
    { nombre: "Mochila", precio: 90 },
    { nombre: "Lapicero", precio: 2 },
    { nombre: "Calculadora", precio: 45 }
]

// Un cliente dice cuánto dinero tiene como máximo. Se busca una función
// que devuelva solo los nombres de los productos que puede pagar

function productosHasta(listaProductos, dineroMaximo) {
    return listaProductos
        .filter(producto => producto.precio <= dineroMaximo)
        .map(producto => producto.nombre);
}

productosHasta(productos, 50) // ["Cuaderno", "Lapicero", "Calculadora"]
productosHasta(productos, 5) // ["Lapicero"]

// -----------------------
const alumnos2 = [
    { nombre: "Rosa", edad: 17 },
    { nombre: "Jorge", edad: 19 },
    { nombre: "Enrique", edad: 15 },
]

// Se busca a un alumno por su nombre.
// Si existe, se muestra "Rosa tiene 17 años". Si no existe, se muestra
// un mensaje que por defecto es "Alumno no encontrado". Pero se puede
// personalizar

function buscarAlumno(listaAlumnos, nombreBuscar, mensajePorDefecto = "Alumno no encontrado") {
    const alumno = listaAlumnos.find(a => a.nombre === nombreBuscar);

    return alumno ? `${alumno.nombre} tiene ${alumno.edad} años` : `${mensajePorDefecto}`;
}


console.log(buscarAlumno(alumnos2, "Rosa")) // "Rosa tiene 17 años"
console.log(buscarAlumno(alumnos2, "Pedro")) // "Alumno no encontrado"
console.log(buscarAlumno(alumnos2, "Pedro", "No está en la lista")) // "No está en la lista"