async function llamadoAlBackend() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:3000/obtenerPilotos',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
        })
        
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)
    
    for (i in result){
        document.getElementById("table").innerHTML += `
        <tr>
        <td>${result[i].nombre}</td>
        <td>${result[i].apellido}</td>
        <td>Germany</td>
        </tr>
        <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
        </tr>
        `
    }
}

async function envioPost() {
    //Armo un objeto para mandarlo como formato JSON
    const data = {
        input : document.getElementById("ingresoTexto").value
    }

    //Envio un pedido POST con un JSON en el body
    const response = await fetch('http://localhost:3000/nombreDelPedido',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    })

}