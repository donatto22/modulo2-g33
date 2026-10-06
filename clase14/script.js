// Métodos
// Según el tipo de dato, tenemos diferentes acciones

// Búsqueda
const fruta = "naranja"

// verificar si la palabra o frase termina con cierta palabra o frase
fruta.endsWith('ja')
// si comienza con...
fruta.startsWith('na')
// si la palabra o frase incluye...
fruta.includes()
// obtiene el índice de la primera coincidencia que haga match con la letra que pongas
fruta.indexOf('a')
// obtengo la última letra que coincida con...
fruta.lastIndexOf('a')
// otros...
console.log(fruta.search(/n/))
// Regex - Regular Expression

// -----------------------------
// Transformación

const texto = "Hola mundo"

console.log(texto)

// 1. Necesito pasar todo el texto a mayúsculas
console.log(texto.toUpperCase())

// 2. Pasar a minúscula
const texto2 = "AÚN TE AMO, VUELVE CONMIGO"
console.log(texto2.toLowerCase())

// 3. Limpiando espacios extra que estén antes o despues de la frase
const frase = "  hola@gmail.com   "
console.log(frase.trim())
// trimEnd - limpia los espacios solo de la derecha / el final
// trimStart - limpia los espacios solo de la izquierda / del inicio

// 4. repetir una palabra o frase
// - Entre paréntesis vas a color la cantidad de veces
// que te gustaría que la palabra o frase se repita
frase.repeat(10)

// 5. 
const mensaje = "yo no te amo"
// cambiamos solo la 1era coincidencia
mensaje.replace('o', 'a')
// cambiar todas las coincidencias
console.log(mensaje.replaceAll('no', 'si'))

// 6.
const texto3 = "Ella es"
const texto4 = "La mejor del mundo"

console.log(texto3.concat(" ", texto4))

// Dividir, comparar, normalizar
const alumnos = "Manuel-Pepe-Maria-Luis"
// dividir, separar los elementos y pasarlos a un arreglo
console.log(alumnos.split("-"))

console.log("c".localeCompare("b"))
// -1 (si la letra está antes que la otra)
// 0 (cuando estén en el mismo lugar)
// 1 (si la letra está después de la otra)

// Extracción
const e = "programación es mi pasión"

// slice - porción / rebanada
// para obtener una parte del texto
// opcionalmente, puedes colocar un inicio y un fin
// desde qué indice quieres obtener la palabra
// donde termina la palabra

// aquí se obtiene desde el índice 3 al 12
console.log(e.slice(3, 12))

// desde el 3er índice hasta lo que queda de la frase (al final)
console.log(e.slice(3))

// Busqueda 2 - Accediendo a algún caracter
const t = "hola mundo este es mi favorito"

// cantidad de caracteres
t.length

// con charAt pedimos una letra en una posición
// colocar un índice que no existe, nos dará un string vacío ""
console.log(t.charAt(2))
console.log(t[2])

// si quieres contar desde el último
console.log(t.at(-2))


