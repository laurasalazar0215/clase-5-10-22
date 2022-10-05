let nombre, apellido, usuario, gmail, direccion, pais, estado, zip



let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    correo = document.getElementById('email').value
    direccion = document.getElementById('address').value
    pais = document.getElementById('country').value
    estado = document.getElementById('state').value
    zip = document.getElementById('zip').value
    GuardarLocarStorage(nombre, apellido, usuario, correo, direccion, pais, estado, zip)

}



function GuardarLocarStorage(nombre, apellido, usuario, correo, direccion, pais, estado, zip) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Apellido', apellido)
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('correo', correo)
    localStorage.setItem('direcion', direccion)
    localStorage.setItem('pais', pais)
    localStorage.setItem('estado', estado)
    localStorage.setItem('zip', zip)

}

function EnterData(){
    let nom = localStorage.getItem('Nombre')
    alert('bienvenido',nom)
}