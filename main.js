import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button',
    },
});

const menu = document.querySelector('.header__nav')
const menuBurger = document.querySelector('.menu')
const body = document.querySelector('body')

menuBurger.addEventListener('click', function () {
    menu.classList.toggle('active')
    menuBurger.classList.toggle('active')
    body.classList.toggle('lock')
})
body.addEventListener('click', function (e) {
    if (body.classList.contains('lock')) {
        if (!e.target.closest('.header')) {
            menu.classList.toggle('active')
            menuBurger.classList.toggle('active')
            body.classList.toggle('lock')
        }
    }
})