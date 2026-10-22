import { createCard } from './createCard.js'

fetch('./data.json')

    .then(response => {
        return response.json()
    })

    .then(data => {
        // for(let i = 0; i <= data.length; i++) {
        //     console.log(data[i])
        // }

        // por detrás el forEach funciona como:
        // let i = 0; i <= data.length; i++
        // siempre va hacia delante y de uno en uno
        // filtro de búsqueda
        const paisFilter = document.getElementById('paisFilter')

        paisFilter.addEventListener('input', () => {
            // cada vez que se escribe o borra una letra, entonces
            // limpiamos el contenido de paises anterior
            // eso significa que borrará la data cargada por primera vez
            document.getElementById('countries').innerHTML = ''

            if (paisFilter.value != '') {
                const paisesFiltrados = data.filter(pais => pais.name.includes(paisFilter.value))

                paisesFiltrados.forEach(pais => {
                    createCard(pais)
                })
            }

            else {
                data.forEach(pais => {
                    createCard(pais)
                })
            }
        })

        // la 1era vez que carga la data
        data.forEach(pais => {
            createCard(pais)
        })
    })
