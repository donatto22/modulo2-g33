const numeros = [1, 2, 3, 4, 5, 6]

// .lenght obtiene la cantidad de elementos que tiene el arreglo
let arregloImpares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        arregloImpares.push(numeros[i])
    }
}

console.log(arregloImpares)

// obtiendo los números impares
// filter obtiene todos los cumplen con la condición
const impares = numeros.filter(n => n % 2 != 0)
console.log("impares", impares)

// find obtiene el 1ero que cumple con la condición
const impares2 = numeros.find(n => n % 2 != 0)
console.log("impares", impares2)

//
const precios = [100, 200, 230, 180, 190]

// con for
for (let i = 0; i < precios.length; i++) {
    console.log(precios[i] * 0.9)
}

// map
// se usa cada vez que quieras modificar los valores que están
// dentro del arreglo original
console.log(precios.map(p => p * 0.9))

// some - alguno
// al menos hay un par?
console.log("al menos hay un par?", numeros.some(n => n % 2 == 0))
// hay algun numero mayor a 10?
console.log("algun nro mayor a 10", numeros.some(n => n > 10))

// every - todos - cada uno
const nuevoArreglo = [10, 25, 0, 1]

console.log("son todos los números mayores a 0?", nuevoArreglo.every(n => n > 0))

//

// ---------------------
/*
1. Se tiene una lista de notas [12, 8, 15, 10, 18, 7] de un salón
se necesita obtener todas las notas aprobatorias y saber
cuántos han aprobado. Suponiendo la nota aprobatoria es >= 11
*/

const notas = [12, 8, 15, 10, 18, 7]
const aprobados = notas.filter(n => n >= 11)
console.log(aprobados, aprobados.length)

//



const invitados = ["Rosa", "Pedro", "Marta"]
const llega = "Pedro"

console.log(invitados.includes(llega))
