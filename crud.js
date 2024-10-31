function bank() {
    const dados = [ {id:0,"nome":"Zamengo","email":"eduardozamengo@gmail.com","senha":"duzentos"},
                  {id:1,"nome":"Samengo","email":"eduardosamengo@gmail.com","senha":"trezentos"}
                ]

    localStorage.setItem("dados", JSON.stringify(dados));
}

function logar() {
    const dados = JSON.parse(localStorage.getItem("dados"));
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    
    let logado = null;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].nome == nome && dados[i].email === email && dados[i].senha === senha) {
            logado = dados[i];
            break;
        }
    }

    if (logado) {
        alert('Login Concluído, Bem vindo ' + logado.nome + '.');
        event.preventDefault();
    } else {
        alert('Usuario não Encontrado, talvez você tenha errado algum dado.')
        event.preventDefault();
    }
}

function cadastro() {
    let novoCadastro = JSON.parse(localStorage.getItem("dados"))
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let cadastro = {id: Date.now(), nome: nome, email: email, senha: senha}
    novoCadastro.push(cadastro)
    
    localStorage.setItem('dados', JSON.stringify(novoCadastro))
    alert("Parabens! seu Registro foi Adicionado!")
    event.preventDefault;
}

function remover() {
    const dados = JSON.parse(localStorage.getItem("dados"));
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let info = null;

    for (let i = 0; i < dados.length; i++) {
        if (nome == dados[i].nome && email == dados[i].email && senha == dados[i].senha) {
            info = dados[i]
            delete dados[i]
            localStorage.setItem("dados", JSON.stringify(dados))
            break;
        }
    }
    alert("Dados Removidos.")
    event.preventDefault();
}

function atualizar() {
    const dados = JSON.parse(localStorage.getItem("dados"));
    let id = document.getElementById("id").value
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
 
    for (let i = 0; i < dados.length; i++) {
        if (id == dados[i].id) {
            let u = {id: dados[i].id, nome: nome, email: email, senha: senha}
            dados[i] = u
            localStorage.setItem("dados", JSON.stringify(dados))
            break;
        }
    }
    alert("Dados Atualizados.")
    event.preventDefault();
}