// Fix viewport height for mobile:

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  

//=========================================================================================



// Header fade-in animation:

const headerFadeInAnimation = document.querySelector('#header-fadein');
headerFadeInAnimation.classList.remove('bg-white');
headerFadeInAnimation.style.transition = ('all 0.5s ease-out');

setTimeout( () => {
    headerFadeInAnimation.classList.add('hidden');
}, 500)


// Header background images slider:


const sliderLabels = [...document.querySelectorAll('.navigation-manual label')];
let isFirstChecked = document.querySelector("#radio1").checked;
let isLastChecked = document.querySelector("#radio5").checked;

let counter = 0;
isFirstChecked = true;
isLastChecked = false;


const imageSlider = function () {
    
    for (let i=1; i<=5; i++) {
        if (document.querySelector("#radio" + i).checked) {
            counter = i-1;
            
            break;
        }
    }
    
    if (counter < 4) {
        
        sliderLabels[counter+1].classList.remove('hover:bg-hover-indice');
        
        for (let j=0; j<5; j++) {
            if (j!==(counter+1) && !(sliderLabels[j].classList.contains('hover:bg-hover-indice'))) {
                sliderLabels[j].classList.add('hover:bg-hover-indice');
            }
        }
        
        document.querySelector("#radio" + ((counter+1)+1)).checked = true;
        
        // Remove the white background color of the last active index:
        sliderLabels[counter].classList.add('bg-inactive-indice');
        sliderLabels[counter].classList.remove('bg-white');
        
        // Add white background color to the new active index:
        sliderLabels[counter+1].classList.remove('bg-inactive-indice');
        sliderLabels[counter+1].classList.add('bg-white');
        
        if (counter>0) isFirstChecked = false;
    }  
    
    else {
        counter = 1;
        document.querySelector("#radio1").checked = true;
        sliderLabels[0].classList.remove('bg-inactive-indice');
        sliderLabels[0].classList.remove('hover:bg-hover-indice');
        sliderLabels[0].classList.add('bg-white');
        
        sliderLabels[4].classList.remove('bg-white');
        sliderLabels[4].classList.add('bg-inactive-indice');
        sliderLabels[4].classList.add('hover:bg-hover-indice');
        
        isLastChecked = false;
        return; 
    }
        
}
    
for (let n=0; n<5; n++) { 

    sliderLabels[n].addEventListener('click', () => {

        sliderLabels[n].classList.add('bg-white');
        sliderLabels[n].classList.remove('bg-inactive-indice');
        sliderLabels[n].classList.remove('hover:bg-hover-indice');


        for (let j=0; j<5; j++) {

            if (j !== n) {
                sliderLabels[j].classList.remove('bg-white');
                sliderLabels[j].classList.add('bg-inactive-indice');
            }

        
            if (j !== n && !(sliderLabels[j].classList.contains('hover:bg-hover-indice'))) {
                sliderLabels[j].classList.add('hover:bg-hover-indice');
            }

        }

        counter = n;

        clearInterval(1);
        clearInterval(sliderInterval);
        sliderInterval = setInterval(imageSlider, 5000);
    })
}

var sliderInterval = setInterval(imageSlider, 5000);






    
    



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
const arrowScrollDesktop = document.querySelector('.arrow-scroll-lg');

const sections = [...document.querySelectorAll('section')];
const footer = document.querySelector('footer');
const htmlElement = document.documentElement;

let isDropdownOpened = false;

burgerButton.addEventListener('click', () => {

    // Hide the rest of the page sections and the footer
    // to disable scrolling while in the mobile menu:


    for (let i=0; i<sections.length; i++) {
        
        sections[i].classList.toggle('hidden');       
    }

    // footer.classList.toggle('hidden');

    // Also, change the HTML root element's background color to black:

    htmlElement.classList.toggle('bg-black');

    
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

    // Hide the back-arrow SVG icon (if it was shown):
    if (!(backArrow.classList.contains('w-0'))) backArrow.classList.add('w-0');


    // Remove the underline of the active category:
    
    manDropdown.classList.remove('border-white');
    manDropdown.classList.remove('link-hover-effect');

    womanDropdown.classList.remove('border-white');
    womanDropdown.classList.remove('link-hover-effect');

    accessoriesDropdown.classList.remove('border-white');
    accessoriesDropdown.classList.remove('link-hover-effect');


    // Close all dropdown extend menus:
    if(isManOpened) {
        Object.keys(notManLinks).forEach(key => {
            notManLinks[key].classList.toggle('text-38');
            
            setTimeout(() => {
                notManLinks[key].classList.toggle('absolute');
            },200)
        }) 
        
        Object.keys(manLinks).forEach(key => {
            manLinks[key].classList.toggle('text-24');
            manLinks[key].classList.toggle('opacity-100');
        })
        
        manLinks[0].classList.toggle('mb-10');
        manLinks[1].classList.toggle('my-10');
        manLinks[2].classList.toggle('my-10');
        manLinks[3].classList.toggle('my-10');
        manLinks[4].classList.toggle('my-10');
        manLinks[5].classList.toggle('mt-10');
        
    } else if (isWomanOpened) {

        Object.keys(notWomanLinks).forEach(key => {
            notWomanLinks[key].classList.toggle('text-38');
            
            setTimeout(() => {
                notWomanLinks[key].classList.toggle('absolute');
            },200)
        }) 
        
        Object.keys(womanLinks).forEach(key => {
            womanLinks[key].classList.toggle('text-24');
            womanLinks[key].classList.toggle('opacity-100');
        })
        
        womanLinks[0].classList.toggle('mb-10');
        womanLinks[1].classList.toggle('my-10');
        womanLinks[2].classList.toggle('my-10');
        womanLinks[3].classList.toggle('my-10');
        womanLinks[4].classList.toggle('my-10');
        womanLinks[5].classList.toggle('mt-10');

    } else if (isAccessoriesOpened) {

        Object.keys(notAccessoriesLinks).forEach(key => {
            notAccessoriesLinks[key].classList.toggle('text-38');
            
            setTimeout(() => {
                notAccessoriesLinks[key].classList.toggle('absolute');
            },200)
        }) 
        
        Object.keys(accessoriesLinks).forEach(key => {
            accessoriesLinks[key].classList.toggle('text-24');
            accessoriesLinks[key].classList.toggle('opacity-100');
        })
        
        accessoriesLinks[0].classList.toggle('mb-10');
        accessoriesLinks[1].classList.toggle('my-10');
        accessoriesLinks[2].classList.toggle('my-10');
        accessoriesLinks[3].classList.toggle('my-10');
        accessoriesLinks[4].classList.toggle('my-10');
        accessoriesLinks[5].classList.toggle('mt-10');
    }


    
    // Set the new bool state:
    isDropdownOpened = !(isDropdownOpened);     
    
    // Close all dropdowns:
    isManOpened = false;
    isWomanOpened = false;
    isAccessoriesOpened = false;
})







// Dropdown Menu Extend for mobile:

const manDropdown = document.querySelector('.li-man a');
const womanDropdown = document.querySelector('.li-woman a');
const accessoriesDropdown = document.querySelector('.li-accessories a');

const extendMenus = [manDropdown, womanDropdown, accessoriesDropdown];
const backArrow = document.querySelector('.back-arrow');

const areaOutsideMan = document.querySelectorAll('header li:not(.li-man):not(.li-man-items), .burger');
const areaOutsideWoman = document.querySelectorAll('header li:not(.li-woman):not(.li-woman-items), .burger');
const areaOutsideAccessories = document.querySelectorAll('header li:not(.li-accessories):not(.li-accessories-items), .burger');

const manLinks = document.querySelectorAll('.li-man-items');
const womanLinks = document.querySelectorAll('.li-woman-items');
const accessoriesLinks = document.querySelectorAll('.li-accessories-items');

const notManLinks = document.querySelectorAll('header li:not(.li-man):not(.li-man-items):not(.li-woman-items):not(.li-accessories-items)');
const notWomanLinks = document.querySelectorAll('header li:not(.li-woman):not(.li-man-items):not(.li-woman-items):not(.li-accessories-items)');
const notAccessoriesLinks = document.querySelectorAll('header li:not(.li-accessories):not(.li-man-items):not(.li-woman-items):not(.li-accessories-items)');

let isManOpened = false;
let isWomanOpened = false;
let isAccessoriesOpened = false;

// Before adjusting the actions for every category selection, we first configure the back arrow icon:

extendMenus.forEach((menu) => {                         // Display the back-arrow icon when a category is selected
    menu.addEventListener('click', () => {
        if (backArrow.classList.contains('w-0')) {
            backArrow.classList.remove('w-0');
        } else if (!(backArrow.classList.contains('w-0'))) {
            backArrow.classList.add('w-0');
        }
    })
})


backArrow.addEventListener('click', () => {
        
    manDropdown.classList.remove('link-hover-effect');
    womanDropdown.classList.remove('link-hover-effect');
    accessoriesDropdown.classList.remove('link-hover-effect');


    // Close the current category's links:
    
    if(isManOpened) {
        Object.keys(notManLinks).forEach(key => {
            notManLinks[key].classList.toggle('text-38');
            
            setTimeout(() => {
                notManLinks[key].classList.toggle('absolute');
            },150)
        }) 
        
        Object.keys(manLinks).forEach(key => {
            manLinks[key].classList.toggle('text-24');
            manLinks[key].classList.toggle('opacity-100');
        })
        
        manLinks[0].classList.toggle('mb-10');
        manLinks[1].classList.toggle('my-10');
        manLinks[2].classList.toggle('my-10');
        manLinks[3].classList.toggle('my-10');
        manLinks[4].classList.toggle('my-10');
        manLinks[5].classList.toggle('mt-10');
        
    } else if (isWomanOpened) {

        Object.keys(notWomanLinks).forEach(key => {
            notWomanLinks[key].classList.toggle('text-38');

            setTimeout(() => {
                notWomanLinks[key].classList.toggle('absolute');
            },150)
        }) 
        
        Object.keys(womanLinks).forEach(key => {
            womanLinks[key].classList.toggle('text-24');
            womanLinks[key].classList.toggle('opacity-100');
        })
        
        womanLinks[0].classList.toggle('mb-10');
        womanLinks[1].classList.toggle('my-10');
        womanLinks[2].classList.toggle('my-10');
        womanLinks[3].classList.toggle('my-10');
        womanLinks[4].classList.toggle('my-10');
        womanLinks[5].classList.toggle('mt-10');

    } else if (isAccessoriesOpened) {

        Object.keys(notAccessoriesLinks).forEach(key => {
            notAccessoriesLinks[key].classList.toggle('text-38');
            
            setTimeout(() => {
                notAccessoriesLinks[key].classList.toggle('absolute');
            },150)
        }) 
        
        Object.keys(accessoriesLinks).forEach(key => {
            accessoriesLinks[key].classList.toggle('text-24');
            accessoriesLinks[key].classList.toggle('opacity-100');
        })
        
        accessoriesLinks[0].classList.toggle('mb-10');
        accessoriesLinks[1].classList.toggle('my-10');
        accessoriesLinks[2].classList.toggle('my-10');
        accessoriesLinks[3].classList.toggle('my-10');
        accessoriesLinks[4].classList.toggle('my-10');
        accessoriesLinks[5].classList.toggle('mt-10');
    }




    // Close the currently open category:
    isManOpened = false;
    isWomanOpened = false;
    isAccessoriesOpened = false;

    // Remove the currently open category's white underline border:
    extendMenus.forEach((menu) => {
        menu.classList.remove('border-white');
        if(!(menu.classList.contains('border-transparent'))) {
            menu.classList.add('border-transparent');
        }
        
    })

    // Animate the disappearing of the arrow icon:
    if (!(backArrow.classList.contains('w-0'))) {    
        backArrow.classList.add('w-0');
    }
})




// 'MAN' Category dropdown toggle:

manDropdown.addEventListener('click', () => {
    manDropdown.classList.toggle('border-white');
    manDropdown.classList.toggle('link-hover-effect');

    Object.keys(notManLinks).forEach(key => {
        notManLinks[key].classList.toggle('text-38');

        setTimeout(() => {
            notManLinks[key].classList.toggle('absolute');
        },200)
    }) 

    Object.keys(manLinks).forEach(key => {
        manLinks[key].classList.toggle('text-24');
        manLinks[key].classList.toggle('opacity-100');
    })

    manLinks[0].classList.toggle('mb-10');
    manLinks[1].classList.toggle('my-10');
    manLinks[2].classList.toggle('my-10');
    manLinks[3].classList.toggle('my-10');
    manLinks[4].classList.toggle('my-10');
    manLinks[5].classList.toggle('mt-10');

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
    womanDropdown.classList.toggle('link-hover-effect');

    Object.keys(notWomanLinks).forEach(key => {
        notWomanLinks[key].classList.toggle('text-38');

        setTimeout(() => {
            notWomanLinks[key].classList.toggle('absolute');
        },200)
    }) 

    Object.keys(womanLinks).forEach(key => {
        womanLinks[key].classList.toggle('text-24');
        womanLinks[key].classList.toggle('opacity-100');
    })

    womanLinks[0].classList.toggle('mb-10');
    womanLinks[1].classList.toggle('my-10');
    womanLinks[2].classList.toggle('my-10');
    womanLinks[3].classList.toggle('my-10');
    womanLinks[4].classList.toggle('my-10');
    womanLinks[5].classList.toggle('mt-10');

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
    accessoriesDropdown.classList.toggle('link-hover-effect');

    Object.keys(notAccessoriesLinks).forEach(key => {
        notAccessoriesLinks[key].classList.toggle('text-38');

        setTimeout(() => {
            notAccessoriesLinks[key].classList.toggle('absolute');
        },200)
    }) 

    Object.keys(accessoriesLinks).forEach(key => {
        accessoriesLinks[key].classList.toggle('text-24');
        accessoriesLinks[key].classList.toggle('opacity-100');
    })

    accessoriesLinks[0].classList.toggle('mb-10');
    accessoriesLinks[1].classList.toggle('my-10');
    accessoriesLinks[2].classList.toggle('my-10');
    accessoriesLinks[3].classList.toggle('my-10');
    accessoriesLinks[4].classList.toggle('my-10');
    accessoriesLinks[5].classList.toggle('mt-10');

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

if (window.innerWidth <= 639) {

    window.mobileArrow = setInterval ( () => {
        arrowScrollMobile.style.transform = 'translateY(10px)';
        arrowScrollMobile.style.transition = 'transform 1s ease-in-out';
    
        setTimeout ( () => {
            arrowScrollMobile.style.transform = 'translateY(-10px)';
            arrowScrollMobile.style.transition = 'transform 1s ease-in-out';
        
        }, 1000);
    
    
    }, 2000);

} else {

    window.desktopArrow = setInterval ( () => {
        arrowScrollDesktop.style.transform = 'translateY(10px)';
        arrowScrollDesktop.style.transition = 'all 1s ease-in-out';
    
        setTimeout ( () => {
            arrowScrollDesktop.style.transform = 'translateY(-10px)';
            arrowScrollDesktop.style.transition = 'all 1s ease-in-out';
    
        }, 1000);
        
    
    }, 2000);
}



// Event listener that toggles the interval whenever the screen resizes to more than 420px:

let widthMatch = window.matchMedia("(max-width: 639px)");

// mm in the function arg is the matchMedia object, passed back into the function

widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is <= 420px
        
        clearInterval(desktopArrow);

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
        
        window.desktopArrow = setInterval ( () => {
            arrowScrollDesktop.style.transform = 'translateY(10px)';
            arrowScrollDesktop.style.transition = 'all 1s ease-in-out';
        
            setTimeout ( () => {
                arrowScrollDesktop.style.transform = 'translateY(-10px)';
                arrowScrollDesktop.style.transition = 'all 1s ease-in-out';
        
            }, 1000);
            
        
        }, 2000);
    }

});








// SEASON ARRIVALS INTRO TITLE:


// h2 and h3 translate transitions on scroll:

const seasonArrivalsTitleHr = document.querySelector('#new-arrivals-title hr');
const seasonArrivalsTitleH2 = document.querySelector('#new-arrivals-title h2');
const seasonArrivalsTitleH3 = document.querySelector('#new-arrivals-title h3');
const seasonArrivalsDesc = document.querySelector('#new-arrivals-desc');
const seasonArrivalsPriceTags = [...document.querySelectorAll('.price-tag')];

var seasonArrivalsFadeIn; 

var scroll = function(callback) { 
    seasonArrivalsFadeIn = window.setInterval(callback, 1000/60)
};


function isElementInViewport(el) {

    // Additional support for jQuery:
    
    // if (typeof jQuery === "function" && el instanceof jQuery) {
    //   el = el[0];
    // }
    
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }



function h2ScrollAnimation() {
    if (isElementInViewport(seasonArrivalsTitleH2)) {
        seasonArrivalsTitleH2.classList.remove('-left-420');
        seasonArrivalsTitleH2.classList.add('left-0');
        seasonArrivalsTitleH2.style.transition = ('all 0.7s ease-out');
        
        seasonArrivalsTitleHr.classList.remove('opacity-0');
        seasonArrivalsTitleHr.style.transition = ('opacity 0.7s ease-out');
    }
}

function h3ScrollAnimation() {
    if (isElementInViewport(seasonArrivalsTitleH3)) {
        seasonArrivalsTitleH3.classList.remove('-mr-106');
        seasonArrivalsTitleH3.classList.add('mr-10');
        seasonArrivalsTitleH3.style.transition = ('all 0.7s ease-out');

        seasonArrivalsPriceTags.forEach(priceTag => {
            setTimeout( () => {
                priceTag.classList.remove('opacity-0');
                priceTag.style.transition = ('all 2s ease-in-out');
            }, 1000)
        })

        seasonArrivalsDesc.classList.remove('opacity-0');
        seasonArrivalsDesc.style.transition = ('opacity 2s ease-in-out');

        clearInterval(seasonArrivalsFadeIn);
    }
}

scroll(h2ScrollAnimation);
scroll(h3ScrollAnimation);




// HR automatic width calculator:
seasonArrivalsTitleHr.width = `${seasonArrivalsTitleH2.clientWidth + parseFloat(window.getComputedStyle(seasonArrivalsTitleH2).marginRight)}`;

// Price tags background color flashing interval: 

const priceTagsBackgrounds = [...document.querySelectorAll('svg a rect')];
const priceTagsPrice = [...document.querySelectorAll("svg a path")];
var timeout0;
var timeout1;
var timeout2;

var timer0 = setInterval ( () => {
    priceTagsBackgrounds[0].style.fill = 'rgba(255,255,255,0.3)'
    priceTagsBackgrounds[0].style.transition = 'fill 1s ease-in-out';

timeout0 = setTimeout ( () => {
        priceTagsBackgrounds[0].style.fill = 'transparent'
        priceTagsBackgrounds[0].style.transition = 'fill 1s ease-in-out';
    
    }, 1000);

}, 2000);


var timer1 = setInterval ( () => {
    priceTagsBackgrounds[1].style.fill = 'rgba(255,255,255,0.3)'
    priceTagsBackgrounds[1].style.transition = 'fill 1s ease-in-out';

timeout1 = setTimeout ( () => {
        priceTagsBackgrounds[1].style.fill = 'transparent'
        priceTagsBackgrounds[1].style.transition = 'fill 1s ease-in-out';
    
    }, 1000);

}, 2000);


var timer2 = setInterval ( () => {
    priceTagsBackgrounds[2].style.fill = 'rgba(255,255,255,0.3)'
    priceTagsBackgrounds[2].style.transition = 'fill 1s ease-in-out';

timeout2 = setTimeout ( () => {
        priceTagsBackgrounds[2].style.fill = 'transparent'
        priceTagsBackgrounds[2].style.transition = 'fill 1s ease-in-out';
    
    }, 1000);

}, 2000);






priceTagsBackgrounds[0].addEventListener('mouseenter', ()=> {

    clearInterval(timer0);
    clearTimeout(timeout0);
    priceTagsBackgrounds[0].style.fill = 'white';
    priceTagsBackgrounds[0].style.transition = 'fill 0.3s ease-in-out';
        
}) 

priceTagsBackgrounds[0].addEventListener('mouseout', ()=> {
    priceTagsBackgrounds[0].style.fill = 'transparent';
    priceTagsBackgrounds[0].style.transition = 'fill 0.3s ease-in-out';
})
priceTagsPrice[0].addEventListener('mouseenter', () => {
    priceTagsBackgrounds[0].style.fill = 'white';
})





priceTagsBackgrounds[1].addEventListener('mouseenter', ()=> {
    
    clearInterval(timer1);
    clearTimeout(timeout1);
    priceTagsBackgrounds[1].style.fill = 'white';
    priceTagsBackgrounds[1].style.transition = 'fill 0.3s ease-in-out';
        
})
priceTagsBackgrounds[1].addEventListener('mouseout', ()=> {
    priceTagsBackgrounds[1].style.fill = 'transparent';
    priceTagsBackgrounds[1].style.transition = 'fill 0.3s ease-in-out';
})
priceTagsPrice[1].addEventListener('mouseenter', () => {
    priceTagsBackgrounds[1].style.fill = 'white';
})





priceTagsBackgrounds[2].addEventListener('mouseenter', ()=> {
  
    clearInterval(timer2);
    clearTimeout(timeout2);
    priceTagsBackgrounds[2].style.fill = 'white';
    priceTagsBackgrounds[2].style.transition = 'fill 0.3s ease-in-out';
        
})
priceTagsBackgrounds[2].addEventListener('mouseout', ()=> {
    priceTagsBackgrounds[2].style.fill = 'transparent';
    priceTagsBackgrounds[2].style.transition = 'fill 0.3s ease-in-out';
})
priceTagsPrice[2].addEventListener('mouseenter', () => {
    priceTagsBackgrounds[2].style.fill = 'white';
})








// SEASON ARRIVALS PRODUCTS PAGE:

const products = [...document.querySelectorAll('#products a')];
const productsImages = [...document.querySelectorAll('#products a img')];
const productsPrices = [...document.querySelectorAll('.product-price')];


for (let ii=0; ii<products.length; ii++) {
    
    products[ii].addEventListener('mouseenter', () => {
        
        // Box shadow animation
        



        // box shadow animation end
        
        productsPrices[ii].classList.toggle('bg-product-price');
        productsPrices[ii].classList.toggle('bg-white');
        productsPrices[ii].style.transition = ('all 0.2s ease-in-out');


        productsImages[ii].classList.toggle('scale-125');
        productsImages[ii].style.transition = ('all 0.2s ease-in-out');
    });

    products[ii].addEventListener('mouseleave', () => {

        // Box shadow animation
            


        // box shadow animation end

        productsPrices[ii].classList.toggle('bg-white');
        productsPrices[ii].classList.toggle('bg-product-price');
        productsPrices[ii].style.transition = ('all 0.2s ease-in-out');


        productsImages[ii].classList.toggle('scale-125');
        productsImages[ii].style.transition = ('all 0.2s ease-in-out');
    });
}


// SEE MORE BUTTON:

const seeMoreProducts = document.querySelector('#see-more-products');
const seeMoreProductsLink = document.querySelector('#see-more-products a');
const seasonArrivalsProducts = document.querySelector('#season-arrivals-products');
let isSeeMoreClicked = false;

seeMoreProducts.addEventListener('click', () => {

    if (window.innerWidth <= 420 && !(isSeeMoreClicked) ) {
        seasonArrivalsProducts.classList.remove('h-2573');
        seasonArrivalsProducts.classList.add('h-5961');

        document.querySelector('#products').classList.remove('h-2573');
        document.querySelector('#products').classList.add('h-5657');
        
        for (let n = 7; n < products.length; n++) {
            products[n].classList.remove('hidden');
        }

    }
    
    if (isSeeMoreClicked) {
        seeMoreProductsLink.href = "#";
    }
    
    isSeeMoreClicked = true;
})







// CATEGORIES PAGE: 

const leftSlider = document.getElementById('left-slider');
const rightSlider = document.getElementById('right-slider');

const categories = [...document.querySelectorAll('#categories-slider a')];
const firstCategory = categories[0];

let categoryMargin = '(0px)';

rightSlider.addEventListener('click', () => {
    firstCategory.style.marginLeft = `calc(${categoryMargin} ` + '+ (-100vw + 250px))';
    categoryMargin += ' + (-100vw + 250px)';

    firstCategory.style.transition = 'all .4s ease-out';
})

leftSlider.addEventListener('click', () => {

    if (!(firstCategory.style.marginLeft == false)) {
    firstCategory.style.marginLeft = `calc(${categoryMargin} ` + '- (-100vw + 250px))';
    categoryMargin += ' - (-100vw + 250px)';

    firstCategory.style.transition = 'all .4s ease-out';

    }
})