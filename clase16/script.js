const nombres = ["Luis", "María", "Rodrigo"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

// -------------
const numeros = [50, 30, 10, 20, 40]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 30) {
        console.log(numeros[i])
    }
}

console.log(numeros.find(n => n > 30))

// -----------
const lista = [11, 22, 33, 44, 55, 60]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 0.9)
}



console.log(lista.map(n => n * 0.9))

// filter hace una búsqueda
// map hace una transformación

// filter - busca todos los que cumplen
// find - trae la primera que cumple con la condición

const listaNumeros = [1, 1, 1, 0, 1, 1, 0]

console.log(listaNumeros.every(n => n == 0))

// ---------------
const listaFocos = ["verde", "blanco", "blanco", "rojo", "rojo", "blanco", "rojo", "verde"]

const verdes = listaFocos.filter(foco => foco == "verde")
const blanco = listaFocos.filter(foco => foco == "blanco")
const rojo = listaFocos.filter(foco => foco == "rojo")

console.log("verdes", verdes.length)
console.log("rojo", rojo.length)
console.log("blancos", blanco.length)

// ---------------------------
console.log("-------------------")

// El objeto por dentro puede tener cualquier tipo de dato
// pude tener strings, numeros, incluso otro arreglo u objeto dentro
const producto = {
    nombre: "Teclado",
    precio: 120,
    color: "blanco"
}

const { precio } = producto

// 2 formas de acceder a los datos dentro del objeto
const listaFocos2 = ["verde", "blanco", "blanco", "rojo", "rojo", "blanco", "rojo", "verde"]

const cantidades = {
    verde: 0,
    blanco: 0,
    rojo: 0
}

cantidades.verde = listaFocos.filter(foco => foco == "verde").length
cantidades.blanco = listaFocos.filter(foco => foco == "blanco").length
cantidades.rojo = listaFocos.filter(foco => foco == "rojo").length

console.log(cantidades)

const notas = [10, 12, 18, 20, 13, 15, 16, 9, 5, 13]

const alumnos = {
    aprobados: 0,
    reprobados: 0
}

// desestructuración
let { aprobados, reprobados } = alumnos

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 11) {
        aprobados++
    } else {
        reprobados++
    }
}