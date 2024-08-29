
//Seleção dos elementos
let multiplicationForm = document.querySelector('#multiplication-form')
let numberInput = document.querySelector('#number')
let multiplicationInput = document.querySelector('#multiplicator')
let multiplicationTable = document.querySelector('#multiplication-operations')
let multiplicationTitle = document.querySelector('#multiplication-title span')


//Função responsável por fazer o loop que faz a multiplicação doa números escolhidos
const createTable = (number,multiplicatorNumber) => {

    multiplicationTable.innerHTML = '';

    for(i = 1; i <=multiplicatorNumber; i++){

        let result = number * i
       
        const template = `<div class='row'>
        <div class='operation'>${number} x ${i} = <div/>
        <div class='result'>${result}</div>
        </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")//Esse é o elemento já transformado em html

        const row = htmlTemplate.querySelector('.row')
        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.textContent = number

}


//monitoramento de evento, responsável pelo evento de submit
multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let multiplicationNumber = +numberInput.value;
    let multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber )
    
})