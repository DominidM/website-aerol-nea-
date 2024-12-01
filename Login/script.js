// Manejar el olvido de contraseña
document.getElementById('forgotPassword').addEventListener('click', function(e) {
    e.preventDefault();

    // Obtener el valor del campo de correo
    const email = document.getElementById("email").value;

    // Verificar si el campo de correo no está vacío
    if (email.trim() === "") {
        alert("Por favor ingresa un correo electrónico.");
        return;  // Si el correo está vacío, no hacer nada
    }

    // Si el correo está lleno, mostrar el toast
    const toast = new bootstrap.Toast(document.getElementById('forgotPasswordToast'));
    toast.show();

    // Animación en los campos
    document.getElementById("email").classList.add("animate__animated", "animate__shakeX");
    document.getElementById("password").classList.add("animate__animated", "animate__shakeX");

    // Eliminar la animación después de un tiempo
    setTimeout(function() {
        document.getElementById("email").classList.remove("animate__shakeX");
        document.getElementById("password").classList.remove("animate__shakeX");
    }, 1000);
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Obtener los valores de los campos de correo y contraseña
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verificación simple de credenciales (puedes reemplazarlo con una lógica real)
    if (email === "admin@example.com" && password === "1234") {
        // Redirigir al panel de administración
        document.getElementById("redirectLink").click();
    } else {
        // Mostrar el mensaje de error y aplicar la animación
        document.getElementById("error-message").style.display = "block";
        document.getElementById("email").classList.add("error");
        document.getElementById("password").classList.add("error");

        // Animación en los campos
        document.getElementById("email").classList.add("animate__animated", "animate__shakeX");
        document.getElementById("password").classList.add("animate__animated", "animate__shakeX");

        // Eliminar la animación después de un tiempo
        setTimeout(function() {
            document.getElementById("email").classList.remove("animate__shakeX");
            document.getElementById("password").classList.remove("animate__shakeX");
        }, 1000);
    }
});

