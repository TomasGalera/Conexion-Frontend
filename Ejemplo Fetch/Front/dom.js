async function llamadoAlBackend() {
    //Llamo a un pedido Get del servidor
    const response = await fetch('http://localhost:3000/saludo',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Tengo que usar el await porque la respuesta del servidor es lenta
    const result = await response.json()
    console.log(result)

    document.getElementById("ejemplo").innerHTML = result.respuesta
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