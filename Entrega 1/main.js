document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    // datos del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;

    //mensaje de bienvenida
    let mensaje = `¡Bienvenido al mundo That Healthy Flow, ${nombre} ${apellido}!`;
    mensaje += `<br>Tu edad es ${edad} años y eres ${sexo}.`;

    //costrar el mensaje en la página
    document.getElementById("mensaje").innerHTML = mensaje;
});

