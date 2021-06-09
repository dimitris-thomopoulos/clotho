// MOBILE HEADER:


// Dropdown Menu for mobile:

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

const arrowScrollMobile = document.querySelector('.arrow-scroll-sm');
// const arrowScrollDesktop = document.querySelector('.arrow-scroll-lg');

let isDropdownOpened = false;

burgerButton.addEventListener('click', () => {

    // Animate the 'X' button:
    topLine.classList.toggle('menu-active');
    topLineWhite.classList.toggle('menu-active');
    topLineTransp.classList.toggle('menu-active');

    bottomLine.classList.toggle('menu-active');
    bottomLineWhite.classList.toggle('menu-active');
    bottomLineTransp.classList.toggle('menu-active');

    // Show the actual dropdown menu:
    sliderDarken.classList.toggle('menu-active');


    // Hide the elements of the header in the background:
    headerButton.classList.toggle('menu-active');
    clothoTitle.classList.toggle('menu-active');
    manualIndices.classList.toggle('menu-active');
    autoIndices.classList.toggle('menu-active');
    arrowScrollMobile.classList.toggle('menu-active');

    isDropdownOpened = !(isDropdownOpened);     
})







// Dropdown Menu Extend for mobile:

const manDropdown = document.querySelector('#dropdown-mobile li:nth-of-type(1) a');
const womanDropdown = document.querySelector('#dropdown-mobile li:nth-of-type(2) a');
const accessoriesDropdown = document.querySelector('#dropdown-mobile li:nth-of-type(3) a');

const areaOutsideMan = document.querySelectorAll('header li:not(.li-man), .burger')
const areaOutsideWoman = document.querySelectorAll('header li:not(.li-woman), .burger')
const areaOutsideAccessories = document.querySelectorAll('header li:not(.li-accessories), .burger')


let isManOpened = false;
let isWomanOpened = false;
let isAccessoriesOpened = false;




// 'MAN' Category dropdown toggle:

manDropdown.addEventListener('click', () => {
    manDropdown.classList.toggle('border-white');
    isManOpened = !(isManOpened);    
})

for (let i=0, len=areaOutsideMan.length; i<len; i++) {
    areaOutsideMan[i].addEventListener('click', () => {
        if (isManOpened) {
            manDropdown.classList.toggle('border-white');
            manDropdown.style.transition = 'border-color 0.2s ease-in-out';
            isManOpened = false;
        }
    })
}




// 'WOMAN' Category dropdown toggle:

womanDropdown.addEventListener('click', () => {
    womanDropdown.classList.toggle('border-white');
    isWomanOpened = !(isWomanOpened);    
})

for (let i=0, len=areaOutsideWoman.length; i<len; i++) {
    areaOutsideWoman[i].addEventListener('click', () => {
        if (isWomanOpened) {
            womanDropdown.classList.toggle('border-white');
            womanDropdown.style.transition = 'border-color 0.2s ease-in-out';
            isWomanOpened = false;
        }
    })
}



// 'ACCESSORIES' Category dropdown toggle:

accessoriesDropdown.addEventListener('click', () => {
    accessoriesDropdown.classList.toggle('border-white');
    isAccessoriesOpened = !(isAccessoriesOpened);    
})

for (let i=0, len=areaOutsideAccessories.length; i<len; i++) {
    areaOutsideAccessories[i].addEventListener('click', () => {
        if (isAccessoriesOpened) {
            accessoriesDropdown.classList.toggle('border-white');
            accessoriesDropdown.style.transition = 'border-color 0.2s ease-in-out';
            isAccessoriesOpened = false;
        }
    })
}









// Scroll down arrow animation

// default setting (when the page loads for the first time):

if (screen.width <= 420) {

    window.mobileArrow = setInterval ( () => {
        arrowScrollMobile.style.transform = 'translateY(10px)';
        arrowScrollMobile.style.transition = 'transform 1s ease-in-out';
    
        setTimeout ( () => {
            arrowScrollMobile.style.transform = 'translateY(-10px)';
            arrowScrollMobile.style.transition = 'transform 1s ease-in-out';
        
        }, 1000);
    
    
    }, 2000);
}



// Event listener that toggles the interval whenever the screen resizes to more than 420px:

let widthMatch = window.matchMedia("(max-width: 420px)");

// mm in the function arg is the matchMedia object, passed back into the function

widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is <= 420px
        
        window.mobileArrow = setInterval ( () => {
                arrowScrollMobile.style.transform = 'translateY(10px)';
                arrowScrollMobile.style.transition = 'transform 1s ease-in-out';
            
                setTimeout ( () => {
                    arrowScrollMobile.style.transform = 'translateY(-10px)';
                    arrowScrollMobile.style.transition = 'transform 1s ease-in-out';
                
                }, 1000);

            
            }, 2000);
    }

    else {

        // it no longer matches the media query
        // clears the previous interval which is now useless (because the arrow for mobile will now be hidden):
        clearInterval(mobileArrow);


        // desktop (THE DESKTOP ARROW IS USED IN THE SEASON ARRIVALS INTRO PAGE, NOT THE HEADER)
        // -TODO: Implement the animation for the new svg with the new stroke and text
        
        // setInterval ( () => {
        //     arrowScrollDesktop.style.transform = 'translateY(10px)';
        //     arrowScrollDesktop.style.transition = 'all 1s ease-in-out';
        
        //     setTimeout ( () => {
        //         arrowScrollDesktop.style.transform = 'translateY(-10px)';
        //         arrowScrollDesktop.style.transition = 'all 1s ease-in-out';
        
        //     }, 1000);
            
        
        // }, 2000);
    }

});