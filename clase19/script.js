const nombre = document.getElementById('nombre') // input#nombre
const edad = document.getElementById('edad')
const password = document.getElementById("password")
const correo = document.getElementById("correo")
const fecha = document.getElementById("fecha")
const service = document.getElementById("service")
// para los inputs no es textContent, es .value
// el editor no sabe qué elemento es el que se ha traido con
// ese ID
// nombre.value

const boton = document.getElementById('btnVerDatos') // button#btnVerDatos

boton.addEventListener('click', () => {
    const valPassword = password.value
    const valCorreo = correo.value

    console.log(nombre.value)
    // Se debe mostrar una alerta en caso
    // la edad registrada sea menor de edad
    if (Number(edad.value) >= 18) {
        console.log(edad.value)
    } else {
        alert(123)
    }

    // la contraseña tenga que tenga al menos 8 dígitos
    console.log(password.value)
    // el correo debe de contener @gmail.com
    console.log(correo.value)

    if (valPassword.length < 8) {
        alert("Contraseña invalidaa")
        return
    }
    if (!valCorreo.includes("@gmail.com")) {
        alert("Corro iinvalidooo")
        return
    }

    console.log(valPassword)
    console.log(valCorreo)


    console.log(fecha.value)
    // en el checkbox usaremos .checked en vez de .value
    console.log(service.checked)
})

// forma 1
// boton.addEventListener('click', saludar)

// forma 2
// boton.addEventListener('click', () => {
//     console.log("hola")
// })