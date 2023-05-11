let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let quantidadeProduto = document.getElementById('quantidade-produto-01')
let BotaoAdicionar = document.getElementById('btn-adicionar-produto-01')
let BotaoDiminuir = document.getElementById('btn-subtrair-produto-01')

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarDom(){
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;
}

atualizarDom()

function adicionarUm(){
  quantidadeProduto.value++;
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;
  subtotalInfo.valor = subtotalInfo.valor + 11.66;
  atualizarDom()

}


function diminuirUm(){
  quantidadeProduto.value = Number(quantidadeProduto.value) - 1;
  subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
  subtotalInfo.valor = subtotalInfo.valor - 11.66;
  atualizarDom()


}

BotaoAdicionar.addEventListener('click', adicionarUm)
BotaoDiminuir.addEventListener('click', diminuirUm)

