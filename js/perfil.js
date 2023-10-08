function start(){
    InformacoesUsuario()
    livrosEmprestados()
}

function InformacoesUsuario(){

    perfil = localStorage.getItem("perfil")
    objeto = JSON.parse(perfil);

    var container = document.createElement("container");
    container.id = "container";

    var imagem = document.createElement("img");
    imagem.id = "imagem"
    imagem.src= "../images/iconLogin.png"


    var nome = document.createElement("p");
    nome.id = "nome"
    nome.textContent = `Usuário: ${objeto.nome}`

    var email = document.createElement("p");
    email.id = "email"
    email.textContent = `Email: ${objeto.email}`

    var idade = document.createElement("p");
    idade.id = "idade"
    idade.textContent = `Idade: ${objeto.idade}`

    container.appendChild(imagem)
    container.appendChild(nome)
    container.appendChild(email)
    container.appendChild(idade)

    var h3 = document.getElementById("primeiraDiv");
    h3.insertAdjacentElement("beforebegin", container);

}

function livrosEmprestados(){

    livro = localStorage.getItem("dadosLivro")
    livros = JSON.parse(livro);
    
    var container = document.createElement("container");
    container.id = "container2";

    livros.forEach(objeto => {    

        var div = document.createElement("div");        
        
        var imagem = document.createElement("img");
        imagem.src= objeto.imagem
        

        var nome = document.createElement("p");
        nome.textContent = objeto.nome
    
        div.appendChild(imagem)
        div.appendChild(nome)

        container.appendChild(div)
                
        
    });
    
    var h3 = document.getElementById("h3");
    h3.insertAdjacentElement("afterend", container);
}

start()