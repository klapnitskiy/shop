const burgerBtn = document.querySelector('.header__top-menu')
const closeBtn = document.querySelector('.burger__btn')
const burgerMenu = document.querySelector('.burger')

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    burgerMenu.style.display = 'block';
    setTimeout(() => {
        burgerMenu.classList.add('--active');
    }, 0)
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    burgerMenu.classList.remove('--active');
    burgerMenu.addEventListener('transitionend', removeMenu)
})

const removeMenu = () => {
    if (!burgerMenu.classList.contains('--active')) {
        burgerMenu.style.display = 'none';
    }
    burgerMenu.removeEventListener('transitionend', removeMenu)
}

