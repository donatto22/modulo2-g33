const frutas = ["manzana", "pera", "sandía"]

// métodos

// agregar
// push agrega uno o más items al arreglo
// puedes agregar 1 o más items, no tienen que ser exactamente el mismo
// tipo de dato

// Mutadores / Mutation
// un murador es un método que modifica el arreglo original
frutas.push("limon", "maracuyá", "kiwi")

// agregar pero al inicio
frutas.unshift("naranja", "mandarina", "tomate", "mango")

// eliminar

// eliminar el último item
frutas.pop()

// elimina el 1er item
frutas.shift()

console.log(frutas)

// ------------
const numeros = ["a", "b", "c"]

numeros.push("d")

// para colocar el arreglo al revés
console.log(numeros.reverse())


// ---------------
// no son mutadores

const numeros2 = [1, 2, 3, 4]

// con slice extraemos una parte de todo el arreglo
// clocamos un inicio y un fin. desde donde a donde va a obtener esa porción
const porcion = numeros2.slice(1, 3) // [2, 3]

const numero3 = [5, 6, 7, 8, 9]
// [5, 6, 7]

console.log(numero3.slice(2, 3))

// unir arreglos
const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]

const union = arreglo1.concat(arreglo2)

console.log(union)

// podemos unir todos los items del arreglo y convertirlos
// en un string usando join
// pedirá que coloques por cual caracter quieres unirlos.
console.log([1, 2, 3, 4, 5, 6, "Hola"].join(""))

// accediendo a un solo item
console.log(numero3[4])

// ambos acceden por índice, la diferencia es que
// .at() acepta posiciones negativas.
// -1 inicia desde el final
console.log(numero3.at(-6))

// includes devuelve true / false según si contiene en el 
// arreglo el valor que estás buscando
console.log(numero3.includes(10))

const roles = ["user", "guest"]

// --------------------

