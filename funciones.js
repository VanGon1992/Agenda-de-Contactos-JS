'use strict'

// window.onload = () => {
const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = './index.html' // Recarga la pagina con una redireccion forzada
}

const cargarContacto = (db, parentNode) => {
    let claves = Object.keys(db)

    for (let clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {
        let divContacto = document.createElement('div')
        let nombreContacto = document.createElement('h3')
        let apellidoContacto = document.createElement('p')
        let numeroContacto = document.createElement('p')
        let direccionContacto = document.createElement('p')
        let iconoBorrar = document.createElement('span')

        nombreContacto.innerHTML = contacto.nombre
        apellidoContacto.innerHTML = contacto.apellido
        numeroContacto.innerHTML = contacto.numero
        direccionContacto.innerHTML = contacto.direccion
        iconoBorrar.innerHTML = 'delete_forever'

        divContacto.classList.add('contacto')
        iconoBorrar.classList.add('material-icons', 'icono')

        iconoBorrar.onclick = () => {
            db.removeItem(contacto.id)
            window.location.href = './index.html'
        }

        divContacto.appendChild(nombreContacto)
        divContacto.appendChild(apellidoContacto)
        divContacto.appendChild(numeroContacto)
        divContacto.appendChild(direccionContacto)
        divContacto.appendChild(iconoBorrar)

        parentNode.appendChild(divContacto)
    }
    // }