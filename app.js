const burgerButton = document.querySelector('.burger');

const topLine = document.querySelector('.topLine');
const topLineWhite = document.querySelector('.topLine span:nth-of-type(2)');
const topLineTransp = document.querySelector('.topLine span:nth-of-type(1)');

const bottomLine = document.querySelector('.bottomLine');
const bottomLineWhite = document.querySelector('.bottomLine span:nth-of-type(2)');
const bottomLineTransp = document.querySelector('.bottomLine span:nth-of-type(1)');
const linesContainer = document.querySelector('.burger-lines');

const headerButton = document.querySelector('#header-btn');
const clothoTitle = document.querySelector('header h1');
const manualIndices = document.querySelector('.navigation-manual');
const autoIndices = document.querySelector('.navigation-auto');
const sliderDarken = document.querySelector('.sliderDarken');



burgerButton.addEventListener('click', () => {

    topLine.classList.toggle('menu-active');
    topLineWhite.classList.toggle('menu-active');
    topLineTransp.classList.toggle('menu-active');

    bottomLine.classList.toggle('menu-active');
    bottomLineWhite.classList.toggle('menu-active');
    bottomLineTransp.classList.toggle('menu-active');

    sliderDarken.classList.toggle('menu-active');
    headerButton.classList.toggle('menu-active');
    clothoTitle.classList.toggle('menu-active');
    manualIndices.classList.toggle('menu-active');
    autoIndices.classList.toggle('menu-active');
})







