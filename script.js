const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Exemplo simples
    if (email === "admin@email.com" && senha === "123456") {
        message.textContent = "Login realizado com sucesso!";
        message.className = "message success";
    } else {
        message.textContent = "E-mail ou senha inválidos!";
        message.className = "message error";
    }
});