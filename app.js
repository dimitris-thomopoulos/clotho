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

burgerButton.addEventListener('click', () => {
    
    topLine.style.transform = 'translateX(15px) rotate(45deg)';
    topLineWhite.style.width = '62px';
    topLineTransp.style.width = '28px';

    topLine.style.transition = 'all 0.3s ease-in-out';
    topLineWhite.style.transition = 'all 0.3s ease-in-out';
    topLineTransp.style.transition = 'all 0.3s ease-in-out';
    


    bottomLine.style.transform = 'translateX(15px) rotate(-45deg)';
    bottomLineWhite.style.width = '62px';
    bottomLineTransp.style.width = '28px';
    
    bottomLine.style.transition = 'all 0.3s ease-in-out';
    bottomLineWhite.style.transition = 'all 0.3s ease-in-out';
    bottomLineTransp.style.transition = 'all 0.3s ease-in-out';

    headerButton.style.display = 'none';
    clothoTitle.style.display = 'none';
    manualIndices.style.display = 'none';
    autoIndices.style.display = 'none';
})