const image = document.querySelector('#product-image')
const buttons = document.querySelectorAll('#image-picker li')

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        buttons.forEach((btn)=>{
            btn.querySelector('.color').classList.remove('selected')
        })

        const button = e.target;
        const id = button.getAttribute('id')
        button.querySelector('.color').classList.add('selected')

        image.classList.add('changing')
        if(!id){
            return image
        }
        image.setAttribute('src',`img/iphone_${id}.jpg`)

        setTimeout(()=>{
            image.classList.remove('changing')
        },200)
    })
})

















// class Pessoa {
//     constructor(nome,idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }

// class PessoaNova extends Pessoa{
//     constructor(nome,idade){
//         super(nome,idade)

//         this.profissao = 'Jogador'
//         this.nascimento = 2006
//     }

//     retornaNome(){
//         return this.nome
//     }
// }

// Pessoa1 = new Pessoa('kaio',20)
// Pessoa2 = new PessoaNova('kaio',20)

// Pessoa2.retornaNome()

// alert(Pessoa2.retornaNome())


// console.log(Pessoa1)
// console.log(Pessoa2)























// var numeroInicial = prompt('Insira um número inicial')
// var sinal = prompt('Insira um sinal de operação!')

// while(sinal!= '+' && sinal!= '-' && sinal!= '*' && sinal!= '/'){
//     alert('Insira um sinal válido')
//     var sinal = prompt('Insira um sinal de operação!')
// }
// var numeroFinal = prompt('Insira um número final!')

// numeroFinal = parseInt(numeroFinal)
// numeroInicial = parseInt(numeroInicial)



// var resultado = 0;

// if(sinal == '+'){
//     resultado = numeroInicial + numeroFinal
// } else if(sinal == '-'){
//     resultado = numeroInicial - numeroFinal
// } else if(sinal == '/'){
//     resultado = numeroInicial / numeroFinal
// } else if(sinal == '*'){
//     resultado = numeroInicial * numeroFinal
// }

// alert(`O resultado é: ${resultado}`)






// var numeroInicial = prompt('informe um número inicial')
// var sinal = prompt('Insira o sinal do tipo de operação')

// while (sinal!= '+' && sinal!= '*' && sinal!= '/' && sinal!= '-'){
//     alert('Por favor informe um sinal de operação válido')
//     sinal = prompt('Insira o sinal do tipo de operação')
// }
// var numeroFinal = prompt('Insira o segundo número')

// numeroInicial = parseInt(numeroInicial)
// numeroFinal = parseInt(numeroFinal)

// resultado = 0;

// if(sinal == '+'){
//     resultado = numeroFinal + numeroFinal
// } else if(sinal == '/'){
//     resultado = numeroInicial / numeroFinal
// } else if(sinal == '-'){
//     resultado = numeroInicial - numeroFinal
// } else if(sinal == '*'){
//     resultado = numeroInicial * numeroFinal
// }


// alert('O resultado final é: '+resultado)

// buttons.forEach((btn)=>{

//     btn.addEventListener('click',(e)=>{

//         buttons.forEach((btn)=>{
//             btn.querySelector('.color').classList.remove('selected')
//         })
//         const button = e.target; // Target sevre para quando eu quero identificar a tecla que eu estou clicando 
//         const id = button.getAttribute("id")
        
//         button.querySelector('.color').classList.add('selected')
//         image.classList.add('changing')
//         image.setAttribute('src', `img/iphone_${id}.jpg`)

//         setTimeout(()=>{

//             image.classList.remove('changing')
//         },300)

//     })

// })