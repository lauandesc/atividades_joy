let tagh2 = document.querySelector("h2")
tagh2.style.color = 'red'
tagh2.style.fontSize = '3rem'


let botaologin = document.querySelector ('button') 
botaologin.style.color = 'red'
botaologin.style.borderRadius = '10px'
botaologin.style.background = 'aqua'

let inputususario = document.getElementById('login-usuario')
inputususario.classList.add('correct')

let input2ususario = document.getElementById('login-senha')
input2ususario.classList.add('error')

let errtexto = document.getElementsByClassName('error-text')

errtexto[1].classList.add("visible")


