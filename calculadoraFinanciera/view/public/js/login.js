function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;

    if (usuario === "admin" && contraseña === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
