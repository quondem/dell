import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    //Optionalparameters
    direction: 'horizontal',
    loop: true,

    //Ifweneedpagination
    pagination: {
        el: '.swiper-pagination',
    },

    //Navigationarrows
    navigation: {
        nextEl: '.swiper-button',
    },
});

const menu = document.querySelector('.header__nav')
const menuBurger = document.querySelector('.menu')
const body = document.querySelector('body')
const form = document.querySelector('.application__form')
const inputName = document.querySelector('.application__input.name')
const inputPhone = document.querySelector('.application__input.phone')
const inputComment = document.querySelector('.application__comment')

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

function validateForm() {
    validateName()
    validatePhone()
    validateComment()
    if (validateName() && validatePhone() && validateComment()) {
        console.log('submit')
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault()
    validateForm()
})
function validateName() {
    if (inputName.value.match(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/)) {  // На одном языке и с большой буквы
        inputName.classList.remove('wrong')
        return true
    } else {
        inputName.classList.add('wrong')
        return false
    }
}
inputName.addEventListener('input', function () {
    validateName()
})
function validatePhone() {
    if (inputPhone.value.match(/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/)) {
        inputPhone.classList.remove('wrong')
        return true
    } else {
        inputPhone.classList.add('wrong')
        return false
    }
}
inputPhone.addEventListener('input', function () {
    validatePhone()
})
function validateComment() {
    if (inputComment.value.match(/\w{5,}/)) {
        inputComment.classList.remove('wrong')
        return true
    } else {
        inputComment.classList.add('wrong')
        return false
    }
}