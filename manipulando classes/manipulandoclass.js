let div = document.querySelector('div')
div.classList.add('texto-novo')
div.classList.remove('borda-azul')
div.classList.toggle('borda-azul')
div.classList.toggle('borda-azul')

let incluiClass = div.classList.contains('texto-novo')

console.log(incluiClass)