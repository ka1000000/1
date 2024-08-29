const mode = document.querySelector('#mode-icon')

mode.addEventListener('click', () => {
    const form = document.querySelector('.login-form')


    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
        form.classList.add('dark')
        return;
    }

    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    form.classList.remove('dark')


});