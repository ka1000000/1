
const hora = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

const relogio = setInterval(function time(){

    let getToday = new Date()

    let hrs = getToday.getHours()
    let mnts = getToday.getMinutes()
    let s = getToday.getSeconds()

    
    if( hrs < 10) hrs = '0' + hrs;
    
    if(mnts < 10 ) mnts = '0'+ mnts;
    
    if ( s < 10 ) s = '0' + s ;
    
    
    hora.textContent = hrs;
    minutos.textContent = mnts;
    segundos.textContent = s;

})

const teste = setTimeout(function kaio(){
    
console.log('testeando')
},5000)