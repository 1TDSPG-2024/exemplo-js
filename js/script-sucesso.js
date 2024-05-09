

//Recuperar o objeto do localStorage
const usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario){
    //Mensagem de Boas Vindas
    const msgWelcome = document.querySelector("#msg-welcome"); 
    msgWelcome.innerText = usuario.email;

    const logoutUSer = document.querySelector("#Logout-user");
    logoutUSer.addEventListener("click", ()=>{
        localStorage.removeItem("usuario-logado");
        window.location.href = "../index.html";
}) 
}else{
    window.location.href = "../index.html";
}
