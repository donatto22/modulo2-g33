
let palabra = "hola"
palabra[0] = "H"
console.log(palabra)
// Hola
console.log(palabra.replace('h', "H"))

// ---------------------
// Quiero saber si la fruta contiene
// la letra "b"
const fruta = "banana"
if (fruta.includes('b')) {
    console.log("la tiene")
} else {
    console.log("no la tiene")
}

console.log("Hola".toUpperCase())

// Se pide que limpies los espacios y pases 
// a mayúsculas el nombre
let nombre = "      carlos    "
console.log(nombre.trim().replace('c', 'C'))

// 2da forma de colocar la 1era letra en mayúculas

const frase = "HOLA     AMIGO        MIO   DE  MI CORAZON"

console.log(frase.replace(/\s+/g, " "))


let slug = "mi-nombre-es-ana"

console.log(slug.charAt(0))
console.log(slug[0])


let dni = "      1 7 2 3 3    4 5 6 7 5  "
console.log(Number(dni.replace(/\s+/g, "")))
// 1723345675

slug.toUpperCase()

// ---------------
let usuario = "@juan"

// 1. no puedes usar startsWith

if (usuario.charAt(0) == "@") {
    console.log("es un usuario")
} else {
    console.log("no es usuario")
}

