// obteniendo un elemento por su etiqueta
// -------------------------------
// como el find
console.log(document.querySelector('button').textContent)

// obteniendo todos los elementos por su etiqueta
// como el filter

const botones = document.querySelectorAll('button')

// si quisieras ver cada texto de cada elemento
// for (let i = 0; i < botones.length; i++) {
//     console.log(botones[i].textContent)
// }


// obtener un elemento por su ID
// ------------------------------------
// si no colocas el hashtag (#) el querySelect
// va a pensar que estás buscando un elemento por etiqueta
console.log(document.querySelector('#bonito').textContent)

// antiguo
// no es necesario colocar el hashtag en este método
// por defecto siempre buscará por ID
document.getElementById('bonito')

// obteniendo elementos por clases
// -----------------------------
// solo trae el primero
console.log(document.querySelector('.titulos').textContent)
console.log(document.querySelectorAll('.titulos'))
// antigua
console.log(document.getElementsByClassName('titulos'))

// nodelist - HTMlCollection
// ------------------------
//   SI     -     SI       / for - for of
//   NO     -     NO       / map, filter, find
//   SI     -     NO       / forEach


// Resumen
// nodelist es la foto, muestra quienes están en el
// salon cuando tomas la foto. si llega un alumno
// nuevo, la foto no cambia

// HTMlCollection, es una cámara en vivo. si alguien
// entra o sale, lo ves al instante

// cambiando el texto de algún elemento
document.querySelector('p').textContent = "Hola, aún te extraño"