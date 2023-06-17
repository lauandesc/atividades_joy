// DECLARAÇÃO DE VARIÁVEIS

const nomeInput = document.getElementById("nome");
const turmaInput = document.getElementsByTagName("input")[1];
const emailInput = document.getElementsByTagName("input")[2];
const enviarButton = document.getElementById("enviar");
let body = {};

const api_url = "https://consumo-api-aulao.onrender.com";

// FUNÇÕES
function cadastro(){
    fetch(api_url + "/usuario/cadastrar", {
      method: 'POST',
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(body)  
    })
    .then(resposta => resposta.json())
    .then(resposta => console.log
    (resposta))
    .catch(erro => console.log(erro));
}


// estruturar nosso body/objeto de envio de dados
function lidarComDados(evento){
    body = {...body, [evento.target.name]:evento.target.value}
    console.log(body)

}

//Função para limpar os dados apos envio
function limparCampos(input){
    input.value = "";
}

//eventos

nomeInput.addEventListener("change", lidarComDados);
turmaInput.addEventListener("change", lidarComDados);
emailInput.addEventListener('change', lidarComDados);

enviarButton.addEventListener('click', (evento)=>{
    evento.preventDefault();
    cadastro();
    limparCampos(nomeInput);
    limparCampos(turmaInput);
    limparCampos(emailInput);
});
