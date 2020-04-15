var logado = false;
if(localStorage.getItem("acesso") == "true"){
    logado = true;
};

if(logado != true){
    alert("Voce nao esta autenticado!");
    window.location.href = "login.html"
}