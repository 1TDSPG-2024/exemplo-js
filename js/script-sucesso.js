

//Recuperando o objeto do localStorage
let tokenUser = sessionStorage.getItem("token");



if(tokenUser != ""){
    //Mensagem de Boas Vindas
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
    const msgWelcome = document.querySelector("#msg-welcome");
    msgWelcome.innerText = usuario.email;

    //LOGOUT
    const logoutUser = document.querySelector("#logout-user");
    logoutUser.addEventListener("click", ()=>{
        sessionStorage.removeItem("token");
        // localStorage.clear
        window.location.href = "../index.html";
    });
}else{
    window.location.href = "../index.html";
}