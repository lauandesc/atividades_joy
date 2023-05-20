// let userinput = document.querySelectorAll('input');
// let userlabel = document.querySelectorAll('label');
// let userhelper = document.querySelectorAll('.helper-text');

// function mostrarPoppup (input, label){
//   input.addEventlistener('focus', () =>{
//     label.classList.add('required-popup')
//   });
  
//   input.addEventlistener('blur', () =>{
//     label.classList.removed('required-popup')

//   });
// }
// mostrarPoppup(userinput, userlabel)





//VALIDAÇÕES INDIVIDUAIS

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");




function mostrarPoppup(input, label){
  // Mostrar popup de campo obrigatório
input.addEventListener("focus", ()=>{
  label.classList.add('required-popup');
})

// Ocultar popup de campo obrigatório

input.addEventListener('blur', ()=>{
  label.classList.remove('required-popup');
})
}
mostrarPoppup(usernameInput, usernameLabel)



// validar valor do input

usernameInput.addEventListener('change', (event) =>{
  let usernameValue = event.target.value;
  if(usernameValue.length < 3) {
    usernameInput.classList.remove('correct')
    usernameInput.classList.add('error');
    usernameHelper.innerText = 'É necessário mais 3 ou mais caracteres';
    usernameHelper.classList.add('visible');

  } else{
    usernameInput.classList.add('correct');
    usernameHelper.classList.remove('visible')
  }
});



// ---------- VALIDAÇÃO USEREMAIL ---------- //

let useremailInput = document.getElementById("email");
let useremailLabel = document.querySelector('label[for="email"]');
let useremailHelper = document.getElementById("email-helper");

mostrarPoppup(useremailInput, useremailLabel)

useremailInput.addEventListener('change', (event) =>{
  let useremailValue = event.target.value;
  if(useremailValue.length < 3){
    useremailInput.classList.remove('correct')
    useremailInput.classList.add('error');
    useremailHelper.innerText = "os caracteres deve conter ***@email.com";
    useremailHelper.classList.add('visible');
  } else{
    useremailInput.classList.add('correct');
    useremailHelper.classList.remove('visible');

  }
})

// ---------- VALIDAÇÃO USERIDADE ---------- //

let useridadeInput = document.getElementById('idade');
let useridadeLabel = document.querySelector('label[for="idade"]');
let useridadeHelper = document.getElementById('idade-helper');

// useridadeInput.addEventListener('focus', () =>{
//   useridadeLabel.classList.add('required-popup')

//   useridadeInput.addEventListener('blur', () =>{
//     useridadeLabel.classList.remove('required-popup')
//   })
// })

useridadeInput.addEventListener('change', (event) =>{
  let useridadeValue = event.target.value;
  if(useridadeValue < 12){
    useridadeInput.classList.remove('correct')
    useridadeInput.classList.add('error');
    useridadeHelper.innerText = 'idade tem que ser maior ou igual a 12';
    useridadeHelper.classList.add('visible');
  } else{
    useridadeInput.classList.add('correct');
    useridadeHelper.classList.remove('visible');
  }
})





// ---------- VALIDAÇÃO SENHA ---------- //

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

mostrarPoppup(senhaInput, senhaLabel)

senhaInput.addEventListener('change', (event) =>{
  let senhainputValue = event.target.value;
  if(senhainputValue.length < 8){
    senhaInput.classList.remove('correct')
    senhaInput.classList.add('error');
    senhaHelper.innerText = 'Sua senha deve conter 8 caracteres ou mais';
    senhaHelper.classList.add('visible');
} else{
  senhaInput.classList.add('correct');
  senhaHelper.classList.remove('visible');
}
})

// ---------- VALIDAÇÃO CONFIRMAR SENHA ---------- //

let confirmarsenhaInput = document.getElementById('confirma-senha');
let confirmarsenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmarsenhaHelper = document.getElementById('confirma-senha-helper');

mostrarPoppup(confirmarsenhaInput, confirmarsenhaLabel)

confirmarsenhaInput.addEventListener('change', (event) =>{
  let confirmarsenhaValue = event.target.value;
  console.log(confirmarsenhaValue, senhaInput.value)
  if(confirmarsenhaValue == senhaInput.value){
    confirmarsenhaInput.classList.add('correct')
    confirmarsenhaHelper.classList.remove('visible')
        
} else{
  confirmarsenhaInput.classList.remove('correct')
  confirmarsenhaInput.classList.add('error')
  confirmarsenhaHelper.classList.add('visible');
  confirmarsenhaHelper.innerText = 'Senha diferente da digitada';

}
})





