async function llamadoAlBackend() {
    document.getElementById("table").innerHTML = ``
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:3000/obtenerPilotos',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()

    document.getElementById("table").innerHTML += `
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Escuderia</th>
        <th>Numero</th>
        <th>Nacionalidad</th>
        <th>Nacimiento</th>
        <th>Puntos</th>
        <th>ID</th>
    </tr>`

    for (i in result){
        document.getElementById("table").innerHTML += `
        <tr>
            <td>${result[i].nombre}</td>
            <td>${result[i].apellido}</td>
            <td>${result[i].escuderia}</td>
            <td>${result[i].numero}</td>
            <td>${result[i].nacionalidad}</td>
            <td>${result[i].nacimiento}</td>
            <td>${result[i].puntaje_campeonato}</td>
            <td>${result[i].piloto_ID}</td>
        </tr>
        `
    }
}

async function envioPost() {
    if (document.getElementById("nombre").value != "" || document.getElementById("apellido").value != "" || document.getElementById("escuderia").value != "" || document.getElementById("nacionalidad").value != "" || document.getElementById("nacimiento").value != "" || document.getElementById("numero").value != null || document.getElementById("puntos").value != null || document.getElementById("id").value != null){
        //Armo un objeto para mandarlo como formato JSON
        const data = {
            nombre : document.getElementById("nombre").value,
            apellido : document.getElementById("apellido").value,
            escuderia : document.getElementById("escuderia").value,
            nacionalidad : document.getElementById("nacionalidad").value,
            nacimiento : document.getElementById("nacimiento").value,
            numero : document.getElementById("numero").value,
            puntos : document.getElementById("puntos").value,
            piloto_ID : document.getElementById("id").value,
        }
    
        //Envio un pedido POST con un JSON en el body
        const response = await fetch('http://localhost:3000/insertarPiloto',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
            body:JSON.stringify(data)
        })
        const result = await response.json()
        // document.getElementById("respuesta").innerHTML = result.message
        alert(result.message)
    } else {
        alert("Completar la información")
    }

}