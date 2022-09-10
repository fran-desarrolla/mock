const contenedor = document.getElementById("contenedor")
const muestraUsers = document.getElementById("muestraUsers")

const user1 = { nombre: "juan", apellido: "perez" }
const user2 = { nombre: "raul", apellido: "gomez" }
const user3 = { nombre: "maria", apellido: "rodriguez" }
const user4 = { nombre: "esteban", apellido: "sanchez" }
const user5 = { nombre: "lucrecia", apellido: "vidal" }

let users = [user1, user2, user3, user4, user5]

users.forEach((users, indice) => {
    contenedor.innerHTML += `
<div id="user${indice}">
    <p>Usuario ${indice}</p>
    <p>${users.nombre}</p>
    <p>${users.apellido}</p>
    <button>borrar ${indice}</button>
</div>
`
})

console.log(users)

users.forEach((user, indice) => {
    let tarjeta = document.getElementById(`user${indice}`)
    tarjeta.children[3].addEventListener('click', () => {
        tarjeta.remove()
        users.splice(indice, 1,"")

        console.log(users)

        

    })

})












