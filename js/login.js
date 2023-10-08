var botao = document.getElementById("efetuarLogin");

entrar = {
    user: "daniel@gmail.com",
    pwd: 12345678,
    perfil:{
        nome: "Daniel Berg",
        email: "daniel@gmail.com",
        idade: "18",
    }
}


botao.addEventListener("click", function(event) {


    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;


    if(usuario == entrar.user && senha == entrar.pwd){ 
        window.location.href = "./perfil.html"
        localStorage.setItem("acesso", true)
        localStorage.setItem("perfil", JSON.stringify(entrar.perfil))

    } else{
        acesso = localStorage.getItem("acesso")            
        
        if(!acesso){
            p = document.getElementById("msgErro").textContent = "Usuário/senha incorreto(s)"        
        }
    }

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    
    event.preventDefault();

    
    
});
