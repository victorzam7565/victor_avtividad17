function mostrarPersona(datos){
    const nombre=datos.results[0].name
    const foto=datos.results[0].picture.large

    const divPersona = document.querySelector("#persona")

    divPersona.innerHTML = 
    `
${nombre.first} ${nombre.last}

    

    imagen
    `
}

fetch('https://randomuser.me/api/')
    .then(respuesta => respuesta.json())
    .then(persona => mostrarPersona(persona));
    