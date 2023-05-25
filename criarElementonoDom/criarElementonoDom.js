const Arrayintensda=[
    {
    li: 'Infatil'
},
{
    li:'Direito'
},
{
    li: 'Anime'
},
{
    li: 'Jogos'
}

]




for (let i = 0; i < Arrayintensda.length; i++){
    let lista = document.createElement('li')
    lista.innerText = `
    <li>${Arrayintensda[i]}</li>
    `

    let ul = document.querySelector('ul')
    ul.appendChild(li)

}