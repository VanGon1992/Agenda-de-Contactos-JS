'use strict'

window.onload = () => {
    const nombre = document.querySelector('.nombre')
    const apellido = document.querySelector('.apellido')
    const numero = document.querySelector('.numero')
    const direccion = document.querySelector('.direccion')
    const btnAgregarContacto = document.querySelector('.btn-agregar-contacto')

    const listadoContactos = document.querySelector('.listado-contactos')

    const db = window.localStorage

    btnAgregarContacto.onclick = () => {
        let contacto = {
                id: Math.random(1, 100),
                nombre: nombre.value,
                apellido: apellido.value,
                numero: numero.value,
                direccion: direccion.value
            }
            // console.log(contacto);
        guardarContacto(db, contacto)
    }
    cargarContacto(db, listadoContactos)
}