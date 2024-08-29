
let currentPageURL = 'https://swapi.dev/api/people/'; 

    window.onload = () =>{
        try{
            loadCharacters(currentPageURL)
        }catch(error){
            console.log(error)
            alert('Erro ao carregar os cards')
        }

    }

    async function loadCharacters(url){
        const mainContent = document.querySelector('.main-content')
        mainContent.innerHTML = '';
        
        try{
            const response = await fetch(url)
            const responseJson = await response.json()

            responseJson.results.forEach((character)=>{

                const card = document.createElement('div')
                card.style.backgroundImage =
                `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D+/g,'')}.jpg')`
                card.className = 'cards'
               
                card.onclick = () => {
                  const modal = document.querySelector('#modal')
                  modal.style.visibility = 'visible'

                  const modalContent = document.querySelector('#modal-content')
                  modalContent.innerHTML = ''

                  const characterImage = document.createElement('div')
                  characterImage.className = 'character-image'
                  characterImage.style.backgroundImage = 
                  `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D+/g,'')}.jpg')` 

                  const nome = document.createElement('span')
                  nome.innerText = `Nome: ${character.name}`
                  nome.className = 'character-details'

                  const altura = document.createElement('span')
                  altura.innerText = `Altura: ${convertAlt(character.height)}`
                  altura.className = 'character-details'

                  const peso = document.createElement('span')
                  peso.innerText = `Peso: ${convertMass(character.mass)}`
                  peso.className = 'character-details'

                  const corDosOlhos = document.createElement('span')
                  corDosOlhos.innerText = `Cor dos olhos: ${convertEyeColor(character.eye_color)}`
                  corDosOlhos.className = 'character-details'

                  const nascimento = document.createElement('span')
                  nascimento.innerText = `Nascimeto: ${convertYears(character.birth_year)}`
                  nascimento.className ='character-details'

                  modalContent.appendChild(characterImage)
                  modalContent.appendChild(nome)
                  modalContent.appendChild(altura)
                  modalContent.appendChild(peso)
                  modalContent.appendChild(corDosOlhos)
                  modalContent.appendChild(nascimento)
                }

                const characterNameBG = document.createElement('div')
                characterNameBG.className = 'character-name-bg'
                
                const characterName = document.createElement('span')
                characterName.className = 'character-Name'
                characterName.innerText = `${character.name}`
                
                characterNameBG.appendChild(characterName)
                card.appendChild(characterNameBG);

                mainContent.appendChild(card)

                
            });
            const nextButton = document.querySelector('#next-button') 
            const backButton = document.querySelector('#back-button') 
            
            nextButton.disabled = !responseJson.next
            backButton.disabled = !responseJson.previous
            
            backButton.style.visibility = responseJson.previous? 'visible' : 'hidden'
            nextButton.style.visibility = responseJson.next? 'visible' : 'hidden'

            currentPageURL = url;
            
        } catch{(error)
            console.log(error)
        }
    }

    async function loadNextPage(){
        if(!currentPageURL)return;
         

        try{
        const response = await fetch(currentPageURL)
        const responseJson = await response.json()

            await loadCharacters(responseJson.next)

        }catch(error){
            console.log(error)
        }
    }

    async function loadPreviousPage(){
        try{
            const response = await fetch(currentPageURL)
            const responseJson = await response.json()

            await loadCharacters(responseJson.previous)

        }catch(error){
            console.log(error)
        }
    };

    function hideModal(){
        const modal = document.getElementById('modal')
        modal.style.visibility = "hidden"
    }
    
    function convertEyeColor(corDosOlhos){

        const cores = {
            blue:' Azul',
            brown: 'Castanho',
            green: 'Verde',
            yellow: 'Amarelo',
            black: 'Preto',
            pink: 'Rosa',
            red: 'Vermellho',
            orange: 'Laranja',
            hanzel: 'Avelã',
            unknown: 'Desconhecida'
        };

        return cores[corDosOlhos] || corDosOlhos;

        }

        function convertAlt(altura){
            if(altura === 'unknown'){
                return 'Desconhecida'
            }
        const convert = altura/100;
        return convert.toFixed(2)
        // Ou poderia ser assim : return (altura / 100).tofixed(2)
    }

    function convertMass(mass){
        if(mass === 'unknown'){
            return 'Desconhecido'
        } return `${mass} KG`

    }

    function convertYears(years){
        if(years === 'unknown'){
            return 'Desconhecido'
        } return years
    }
