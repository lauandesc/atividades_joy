let article = document.createElement('article')
console.log(article)

article.innerHTML = `<h3>Pop Vegan</h3>
<p class="subtitulo">Comida vegana para todos!</p>
<div class="data">06/07/2022</div>
<p>Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)</p>
`
console.log(article)

const main = document.querySelector('main')
main.appendChild(article)


const adicionarid = article.setAttribute("id", "post-2")
console.log(adicionarid)