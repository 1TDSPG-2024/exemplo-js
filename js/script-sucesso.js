// Recuperando o token do usuário
let tokenUser = sessionStorage.getItem("token")

if(tokenUser != "") {
    // Recuperando o objeto do localStorage
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
    // Mensagem de boas vindas
    const msgWelcome = document.querySelector("#msg-welcome");
    msgWelcome.innerText = usuario.email

// LOGOUT
const logoutUser = document.querySelector("#logout-user");
logoutUser.addEventListener("click", ()=> {
    // localStorage.removeItem("usuario-logado");
    // Remover o token no logout
    sessionStorage.removeItem("token")
    window.location.href = "../index.html"
});
} else {
    window.location.href = "../index.html"
}