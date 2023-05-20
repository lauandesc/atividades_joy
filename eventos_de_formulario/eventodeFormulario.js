let inputIdade = document.getElementById('idade')
let inputEmail = document.getElementById('email')
let formulario = document.querySelector('form')

// inputEmail.addEventListener('focus', () =>{
//     inputEmail.style.backgroundColor = "lightgreen"
// })

//como fazer com argumento evento e target?
inputEmail.addEventListener('focus', (e) =>{
    e.target.style.backgroundColor = "lightgreen"
})

inputEmail.addEventListener('blur', (e) =>{
    e.target.style.backgroundColor = ""
})

inputIdade.addEventListener('change', () =>{
    alert('Tem certeza que gostaria de mudar os dados?')
    
})

formulario.addEventListener('submit', () =>{
    alert('Dados enviado!')
})