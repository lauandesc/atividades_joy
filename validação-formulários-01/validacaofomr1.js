// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");


// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", ()=>{
    usernameLabel.classList.add('required-popup');
})

// Ocultar popup de campo obrigatório

usernameInput.addEventListener('blur', ()=>{
    usernameLabel.classList.remove('required-popup');
})



let useremailInput = document.getElementById("email");
let useremailLabel = document.querySelector('label[for="email"]');
let useremailHelper = document.getElementById("email-helper");
// Mostrar popup de campo obrigatório
//useremailInput.addEventListener("focus", ()=>{
  //  useremailLabel.classList.add('required-popup');
//})
// Mostrar popup de campo obrigatório
//useremailInput.addEventListener("blur", ()=>{
  //  useremailLabel.classList.remove('required-popup');
//})

function mostrarPopup(input, label){
    input.addEventListener("focus", ()=>{
        label.classList.add('required-popup');
    })
    // Mostrar popup de campo obrigatório
    input.addEventListener("blur", ()=>{
        label.classList.remove('required-popup');
    })
}



// Validar valor do input
usernameInput.addEventListener('change', (event)=>{
   let unameValue = event.target.value;
   if(unameValue.length < 3){
    usernameInput.classList.add('correct');
    useremailInput.classList.add('error');
    usernameHelper.innerText= "o nome deve ter pelo menos 3 caracteses"
    useremailHelper.classList.add('visible');
   }else {
    usernameInput.classList.add('correct');
    useremailHelper.classList.remove('visible');
   }

});


