const qrCodeInput = document.querySelector('.inputt')
const qrCodeBtn = document.querySelector('.buttonn')
const container = document.querySelector('.container')
const qrCodeImg = document.querySelector('.qr-code img')

function generateQrCode(){
    let qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;
    qrCodeBtn.textContent = 'Gerando código...'
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}` // Posso fazer assim também//
    
    qrCodeImg.addEventListener('load',()=>{ //Posso fazer desta forma!
        container.classList.add('active')
        qrCodeBtn.textContent = 'Código gerado'
    })
    
        // setTimeout(()=>{  //Ou desta forma! Ambas tem o mesmo resultado
        //     container.classList.add('active')
        //     qrCodeBtn.textContent = 'Código gerado'
        // },1200)


    
}
qrCodeBtn.addEventListener('click',()=>{
    generateQrCode()
})

qrCodeInput.addEventListener('keydown',(e)=>{//keydown:É quando a tecla é pressionada 
 if(e.code === 'Enter'){
    generateQrCode()
 }
})
 
qrCodeInput.addEventListener('keyup',()=>{//keyup:É quando a tecla é solta 
if(!qrCodeInput.value){
    container.classList.remove('active')
    qrCodeBtn.textContent = 'Gerar QR Code'
}
})
