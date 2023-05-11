const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const perfildados = document.getElementById('link-perfil-dados')

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

//document.addEventListener("keydown", (event) => {
  //if(event.code == "Digit1"){
  //navPerfil.style.display = "block"}
  //else if(event.key == "Escape"){
  //navPerfil.style.display = "none"}
//})

document.addEventListener("keydown", function (event){
  if (navPerfil.style.display == "block"){
    if (event.code == "Digit1") {
      perfildados.click();
    } 
    else if(event.code == "Escape"){
      navPerfil.style.display = "none"
    }
  } else if (event.code == "Digit1") {
    navPerfil.style.display = "block";
  }
});