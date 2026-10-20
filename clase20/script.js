const API = "https://jsonplaceholder.typicode.com/posts/"

const APIdos = "https://jsonplaceholder.typicode.com/users"

fetch(APIdos)
    .then(respues => {
        return respues.json()
    })
    .then(filtrando => {
        return filtrando.filter(p => p.email.includes('.biz'))
    })
    .then(todofiltrado => {
        console.log(todofiltrado)
        for (let i = 0; i < todofiltrado.length; i++) {
            const grupo = document.createElement('div')

            const usuario = document.createElement('p')
            usuario.textContent = todofiltrado[i].name

            const correo = document.createElement('p')
            correo.textContent = todofiltrado[i].email

            grupo.appendChild(usuario)
            grupo.appendChild(correo)

            document.querySelector('body').appendChild(grupo)
        }
    })

// then - entonces


// todos los usuarios en el que su correo
// termine en .biz