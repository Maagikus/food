require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import modal from './modules/modalWindow';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/form';
import slider from './modules/slider';
import {openModal} from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-06-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});

//tabs

//timer

//modalWindow

// use class for cards

// const getResource = async ( url) => {
//     const res = await fetch(url);
//     if(!res.ok){
//         throw new Error(`Could not fetch${url}, status: ${res.status}`);
//     }
//
//     return await res.json();
// }
// getResource('http://localhost:3000/menu')
//     .then(data=>{
//         data.forEach(({img, altimg, title, decsr, price})=>{
//             new MenuCard(img, altimg, title, decsr, price, '.menu .container').render();
//         });
//     });
// getResource('http://localhost:3000/menu')
//     .then(data=> createCard());
// function createCard(data){
//     data.forEach(({img, altimg, title, decsr, price})=>{
//         const element = document.createElement('div');
//
//         element.classList.add('menu__item')
//         element.innerHTML = `
//           <img src=${img} alt=${altimg}>
//                 <h3 class="menu__item-subtitle">${title}</h3>
//                 <div class="menu__item-descr">${decsr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
//                 </div>
//         `;
//         document.querySelector('.menu .container').append(element)
//     })
// }

//forms
//
// const forms = document.querySelectorAll('form');
// const message = {
//     loading: 'img/form/spinner.svg',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так...'
// };
//
// forms.forEach(item => {
//     bindPostData(item);
// });
//
// const postData = async (url, data) => {
//     let res = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     });
//
//     return await res.json();
// };
//
// async function getResource(url) {
//     let res = await fetch(url);
//
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//
//     return await res.json();
// }
//
// function bindPostData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         let statusMessage = document.createElement('img');
//         statusMessage.src = message.loading;
//         statusMessage.style.cssText = `
//             display: block;
//             margin: 0 auto;
//         `;
//         form.insertAdjacentElement('afterend', statusMessage);
//
//         const formData = new FormData(form);
//
//         const json = JSON.stringify(Object.fromEntries(formData.entries()));
//
//         postData('http://localhost:3000/requests', json)
//             .then(data => {
//                 console.log(data);
//                 showThanksModal(message.success);
//                 statusMessage.remove();
//             }).catch(() => {
//             showThanksModal(message.failure);
//         }).finally(() => {
//             form.reset();
//         });
//     });
// }
//
// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector('.modal__dialog');
//
//     prevModalDialog.classList.add('hide');
//     openModal();
//
//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('modal__dialog');
//     thanksModal.innerHTML = `
//         <div class="modal__content">
//             <div class="modal__close" data-close>×</div>
//             <div class="modal__title">${message}</div>
//         </div>
//     `;
//     document.querySelector('.modal').append(thanksModal);
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 4000);
// }
//slider

//Вариант 1
// showSlides(slideIndex);
//
// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
// } else {
//     total.textContent = slides.length;
// }
//
// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//
//     slides.forEach((item) => item.style.display = 'none');
//
//     slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
//
//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent =  slideIndex;
//     }
// }
//
// function plusSlides (n) {
//     showSlides(slideIndex += n);
// }
//
// prev.addEventListener('click', function(){
//     plusSlides(-1);
// });
//
// next.addEventListener('click', function(){
//     plusSlides(1);
// });



//Calc
