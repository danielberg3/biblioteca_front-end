livros = [
    {
        nome: "O ladrão de raios",
        imagem: "https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UL320_.jpg",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil minima ea atque vero voluptatum similique obcaecati commodi ratione numquam ex dolor, dicta saepe autem assumenda nam praesentium. Aspernatur, quod?",
        autor: "Rick Riordan", 
        paginas: "375",
    },
    {
        nome: "Malícia",
        imagem: "https://m.media-amazon.com/images/I/81mJGth5QIL._AC_UL320_.jpg",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil minima ea atque vero voluptatum similique obcaecati commodi ratione numquam ex dolor, dicta saepe autem assumenda nam praesentium. Aspernatur, quod?",
        autor: "Chris Wooding", 
        paginas: "359",
    },
    {
        nome: "O livro selvagem",
        imagem: "https://m.media-amazon.com/images/I/81oIHbh5OPL._AC_UL320_.jpg",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil minima ea atque vero voluptatum similique obcaecati commodi ratione numquam ex dolor, dicta saepe autem assumenda nam praesentium. Aspernatur, quod?",
        autor: "Juan Villoro", 
        paginas: "192",
    },
    {
        nome: "A pedra filosofal",
        imagem: "https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UL320_.jpg",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil minima ea atque vero voluptatum similique obcaecati commodi ratione numquam ex dolor, dicta saepe autem assumenda nam praesentium. Aspernatur, quod?",
        autor: "J.K. Rowling", 
        paginas: "256",
    },
    {
        nome: "A cinco passos de você",
        imagem: "https://m.media-amazon.com/images/I/81Q11TuUR3L._AC_UL320_.jpg",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil minima ea atque vero voluptatum similique obcaecati commodi ratione numquam ex dolor, dicta saepe autem assumenda nam praesentium. Aspernatur, quod?",
        autor: "Rachael Lippincott", 
        paginas: "288",
    },
    {
        nome: "O nome do vento",
        imagem: "https://m.media-amazon.com/images/I/91eWRgtbLJL._AC_UL320_.jpg",
        resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil minima ea atque vero voluptatum similique obcaecati commodi ratione numquam ex dolor, dicta saepe autem assumenda nam praesentium. Aspernatur, quod?",
        autor: "Patrick Rothfuss", 
        paginas: "768",
    },
]


function start(){

    acesso = localStorage.getItem("acesso");

    if(acesso){        
        elemento  = document.getElementById("logado");
        elemento.remove();
        perfil = document.getElementById("perfil");
        perfil.classList.toggle("hidden");
    }
}



function livroSelecionado(nome){

    var livrobuscado

    livros.forEach(livro => {
        if(livro.nome == nome){
            livrobuscado = livro
        }
    });

    

    exibirPopup(livrobuscado)
    
}

function exibirPopup(livro){
    
    var obra = document.createElement("div");
    obra.id = "meuElemento";


    var fechar = document.createElement("button");
    fechar.className = "material-symbols-outlined";
    fechar.textContent = "close";
    fechar.id = "fechar";
    fechar.addEventListener("click", fecharPopup);


    var descricao = document.createElement("div");
    descricao.id = "descricao";

    var textos = document.createElement("div");
    textos.id = "textos";

    var titulo = document.createElement("h3");
    titulo.id = "titulo";
    titulo.textContent = livro.nome

    var imagem = document.createElement("img");
    imagem.id = "imagem";
    imagem.src = livro.imagem

    var resumo = document.createElement("p");
    resumo.id = "resumo";
    resumo.textContent = livro.resumo


    var autor = document.createElement("p");
    autor.id = "autor";
    autor.textContent = `Autor(a): ${livro.autor}.`
    
    var paginas = document.createElement("p");
    paginas.id = "paginas";
    paginas.textContent = `Páginas: ${livro.paginas}.`

    var emprestar = document.createElement("button");
    emprestar.id = "emprestar";
    emprestar.textContent = "Pegar emprestado"
    emprestar.addEventListener("click", emprestarLivro);

    var body = document.getElementById("body");

    descricao.appendChild(fechar);

    textos.appendChild(titulo);
    textos.appendChild(resumo);
    textos.appendChild(autor);
    textos.appendChild(paginas);
    
    descricao.appendChild(textos);
    descricao.appendChild(emprestar);

    obra.appendChild(imagem);
    obra.appendChild(descricao);

    body.insertAdjacentElement("afterend", obra);

    desativarAtivarElementos();

    

}

function desativarAtivarElementos(){
    
    var elemento = document.getElementById("body");
    elemento.classList.toggle("desativado");
}


 function fecharPopup() {
    
    desativarAtivarElementos();    
    var elemento = document.getElementById("meuElemento");
    elemento.remove();
}


function emprestarLivro(){
    var dados = JSON.parse(localStorage.getItem("dadosLivro"));

    if(dados == null){
        localStorage.setItem("dadosLivro", "[]");
        dados = [];
    }

    var titulo = document.getElementById("titulo").textContent;
    console.log(titulo)

    livros.forEach(livro => {
        if(titulo == livro.nome){
            livroAux = {
                nome: livro.nome,
                imagem: livro.imagem,
            }
            dados.push(livroAux);
            
        }
    });

    localStorage.setItem("dadosLivro", JSON.stringify(dados));
    
    alert("Livro cadastrado!")
    fecharPopup();

}

start()
