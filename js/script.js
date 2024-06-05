const btnCriar = document.querySelector("#btnCriar");
const inputUsuario = document.querySelector("#inputUsuario");

const inputNome = document.querySelector("#inputNome");
const inputCidade = document.querySelector("#inputCidade");
const inputEmail = document.querySelector("#inputEmail");
const inputConfirmarEmail = document.querySelector("#inputConfirmarEmail");

resultado = document.getElementById("resultado");

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

btnCriar.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event.target.parentNode.id);
    
    var nome = window.prompt("Digite o nome que você deseja exibir");

    let novoPost = document.createElement("li");
    if(nome != "" && inputUsuario.value != ""){
        novoPost.innerText = nome + ": " + inputUsuario.value;
        
        listaPostagens.append(novoPost);
    }
    else{
        window.alert("Um ou mais itens não foram preenchidos");
    }

    inputUsuario.value = "";
})

function Enviar(){
    var nome = document.getElementById("inputNome").value;
    var cidade = document.getElementById("inputCidade").value;
    var email1 = document.getElementById("inputEmail").value;
    var email2 = document.getElementById("inputConfirmarEmail").value;

    if(nome == "" || cidade == "" || email1 == "" || email2 == ""){
        resultado.innerText = `Informações incompletas`;
    }
    else if(email1 != email2){
        resultado.innerText = `Algumas informações não coincidem`;
    }
    else{
        resultado.innerText = `Formulário enviado!`;
    
        inputNome.value = "";
        inputCidade.value = "";
        inputEmail.value = "";
        inputConfirmarEmail.value = "";
    }
}

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 3000);