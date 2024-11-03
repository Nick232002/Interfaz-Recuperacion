document.getElementById("recuperarForm").addEventListener("submit", function(event) {
    var usuario = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;

    if (usuario === "" || correo === "") {
        alert("Por favor, complete todos los campos obligatorios.");
        event.preventDefault(); // Evita el envío del formulario si los campos están vacíos
    } else if (!validateEmail(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        event.preventDefault(); // Evita el envío si el correo no es válido
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
