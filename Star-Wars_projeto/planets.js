let currentPageURL = 'https://swapi.dev/api/planets/'

window.onload = () => {
try{
    loadCharacters(currentPageURL)
} catch(error){
    console.log(error)
}    
}

async function loadCharacters (url){
    const mainContent = document.querySelector('.main-content')
    mainContent.innerHTML = '';

    const response = await fetch(url)
    const responseJson = await response.json()

    responseJson.results.forEach(async(character) =>{
    const card = document.createElement('div')
    let urlImg = `https://starwars-visualguide.com/assets/img/planets/${character.url.replace(/\D+/g, '')}.jpg`
    const response = await fetch(urlImg)

    if(response.status == '404'){
        urlImg = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    }

    card.style.backgroundImage = `url('${urlImg}')`
    card.className = 'cards'

    card.onclick = () => {
        const modalContent = document.querySelector('.modal-content')
        modalContent.innerHTML = '';

        const modal = document.querySelector ('.modal')
        modal.style.visibility = 'visible'

        const characterImage = document.createElement ('div')
        characterImage.style.backgroundImage = `url('${urlImg}')`
        characterImage.className = 'character-image'

        const name = document.createElement ('span')
        name.innerText = `Nome: ${convertName(character.name)}`
        name.className = 'character-details'

        const rotation = document.createElement('span')
        rotation.innerText = `Periodo de rotacao: ${convertRotation(character.rotation_period)}`
        rotation.className = 'character-details'

        const orbital = document.createElement('span')
        orbital.innerText = `Periodo de orbital: ${convertOrbital(character.orbital_period)}`
        orbital.className = 'character-details'

        const diametro = document.createElement('span')
        diametro.innerText = `Diametro: ${convertDiametro(character.diameter)}`
        diametro.className = 'character-details'

        const clima = document.createElement('span')
        clima.innerText = `Clima: ${convertCilmate(character.climate)}`
        clima.className = 'character-details'

        modalContent.appendChild(characterImage)
        modalContent.appendChild(name)
        modalContent.appendChild(rotation)
        modalContent.appendChild(orbital)
        modalContent.appendChild(diametro)
        modalContent.appendChild(clima)
    }

    const characterNameBG = document.createElement('div')
    characterNameBG.className = 'character-name-bg'

    const characterName = document.createElement('span')
    characterName.innerText = `${character.name}`
    characterName.className = 'character-name'

    characterNameBG.appendChild(characterName)
    card.appendChild(characterNameBG)
    mainContent.appendChild(card)
    })

    const nextButton = document.querySelector('.next-button')
    const backButton = document.querySelector('.back-button')

    nextButton.style.visibility = responseJson.next? 'visible' : 'hidden'
    backButton.style.visibility = responseJson.previous? 'visible' : 'hidden'

    nextButton.disabled = !responseJson.next
    backButton.disabled = !responseJson.previous

currentPageURL = url
}

async function loadNextPage(){
    const response = await fetch(currentPageURL)
    const responseJson = await response.json()
    loadCharacters(responseJson.next)
}

async function loadPreviousPage(){
    const response = await fetch(currentPageURL)
    const responseJson = await response.json()
    loadCharacters(responseJson.previous)
}

function hideModal(){
    const modal = document.querySelector('.modal')
    modal.style.visibility = 'hidden' 
}

function convertName (nome){
    if(nome == 'unknown'){
        return 'Desconhecido'
    } return nome
}

function convertRotation (rotacao){
    if(rotacao == 'unknown'){
        return 'Desconhecida'
    } return `${rotacao} dias`
}

function convertOrbital (orbital){
    if(orbital == 'unknown'){
        return 'Desconhecida'
    } return `${orbital} dias`
}

function convertDiametro(diametro){
    if(diametro == 'unknown'){
        return 'Desconhecido'
    } return `${(diametro/1000).toFixed(3)} KM`
}

function convertCilmate(clima){
    const temp = {
            arid: 'Árido',
            temperate: 'Temperado',
            tropical: 'tropical',
            frozen: 'Frio',
            polluted: 'Poluído',
            hot: 'Quente',
            superheated: 'Super aquecido',
            subartic: 'Subartico',
            artic :'Artico',
            rocky: 'Rochoso',
            windy: 'Ventoso',
            frigid: 'Frigido',
            murky: 'Escuro',
            unknown:'Desconhecido'
}
    return temp [clima] || clima ;
}
//Vm pra cima ...