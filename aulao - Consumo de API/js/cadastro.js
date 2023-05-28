// DECLARAÇÃO DE VARIÁVEIS

const nomeInput = document.getElementsByTagName("input")[0];
const apelidoInput = document.getElementsByTagName("input")[1];
const emailInput = document.getElementsByTagName("input")[2];
const senhaInput = document.getElementsByTagName("input")[3];
let body = {};



// FUNÇÕES
function submit(){
fetch('https://api-de-compras.onrender.com/usuario',{
    method:'post',
    headers:{
'conte-Type': 'aplication/json'
    },
    body: body,
})
.then(data => data.json()) 
.then(data => console.loge(data))
.catch(erro => console.log(erro));
}

// estruturar nosso body/objeto de envio de dados
function onChange(e){
    body = {...body, [e.target.value] : e.target.value}
    console.log(body)
}
console.log(body)

// EVENTOS
nomeInput.addEventListener('change', onChange)

enviarButton.addEventListener('click', (e)=>{
    e.preventDefault()
    submit()
})



