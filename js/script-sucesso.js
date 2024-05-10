
//Recuperar token
let tokenUser = sessionStorage.getItem("token");

if(tokenUser != ""){
    //Mensagem de Boas Vindas
    //Recuperar o objeto do local 
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
    const msgWelcome = document.querySelector("#msg-welcome"); 
    msgWelcome.innerText = usuario.email;

    const logoutUSer = document.querySelector("#Logout-user");
    logoutUSer.addEventListener("click", ()=>{
        sessionStorage.removeItem("token");
        window.location.href = "../index.html";
        
}) 
}else{
    window.location.href = "../index.html";
}
