const burgerButton = document.querySelector('.burger');
const topLine = document.querySelector('.burger-lines span:nth-of-type(1)');
const bottomLine = document.querySelector('.burger-lines span:nth-of-type(2)');
const linesContainer = document.querySelector('.burger-lines');

const headerButton = document.querySelector('#header-btn');
const clothoTitle = document.querySelector('header h1');
const manualIndices = document.querySelector('.navigation-manual');
const autoIndices = document.querySelector('.navigation-auto');

burgerButton.addEventListener('click', () => {

    linesContainer.style.height = '100%';
    linesContainer.style.justifyContent = 'center';
    linesContainer.style.alignItems = 'center';
    linesContainer.style.transition = 'all 0.3s ease-in-out';
    
    topLine.style.transform = 'rotate(-45deg) translateY(1.5px)';
    topLine.style.transition = 'all 0.3s ease-in-out';
    
    bottomLine.style.transform = 'rotate(45deg) translateY(-1.5px)';
    bottomLine.style.transition = 'all 0.3s ease-in-out';

    headerButton.style.display = 'none';
    clothoTitle.style.display = 'none';
    manualIndices.style.display = 'none';
    autoIndices.style.display = 'none';
})