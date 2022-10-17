const hamburguer = document.querySelector('.navbar__hamburguer');
const navMenu = document.querySelector('.navbar__menu');


hamburguer.addEventListener('click', () => {

    navMenu.classList.toggle('navbar__menu--active');
})


document.querySelectorAll('.navbar__link').forEach(n  => n.addEventListener('click', () => {

    navMenu.classList.remove('navbar__menu--active');
}))
