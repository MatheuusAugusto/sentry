function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");


    if(email.value == "matheus" && senha.value == "123"){
        localStorage.setItem("acesso", true);
        alert("Usuario autenticado!");
        window.location.href = "index.html"
    }

    else{
        alert("Usuario ou Senha invalidos!")
    }

}