const btnCriar = document.querySelector("#btnCriar");
const inputUsuario = document.querySelector("#inputUsuario");

const inputNome = document.querySelector("#inputNome")
const inputCidade = document.querySelector("#inputCidade")
const inputEmail = document.querySelector("#inputEmail")
const inputConfirmarEmail = document.querySelector("#inputConfirmarEmail")

resultado = document.getElementById("resultado");

btnCriar.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event.target.parentNode.id);

    
    var nome = window.prompt("Digite o nome que você deseja exibir")

    let novoPost = document.createElement("li");
    if (nome = "")
        novoPost.innerText = nome + ": " + inputUsuario.value;

    listaPostagens.append(novoPost);

    inputUsuario.value = "";
})

function Enviar(){
    var nome = document.getElementById("inputNome").value;
    var cidade = document.getElementById("inputCidade").value;
    var email1 = document.getElementById("inputEmail").value;
    var email2 = document.getElementById("inputConfirmarEmail").value;

    if(nome == "" || cidade == "" || email1 == "" || email2 == ""){
        resultado.innerText = `Informações incompletas`
    }
    else if(email1 != email2){
        resultado.innerText = `Algumas informações não coincidem`
    }
    else{
        resultado.innerText = `Formulário enviado!`
    
        inputNome.value = "";
        inputCidade.value = "";
        inputEmail.value = "";
        inputConfirmarEmail.value = "";
    }
}