const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navMenu = document.querySelector('.navbar .nav-menu');

// Open menu when clicking the open button
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

// Close menu when clicking the close button
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

const swiper = new Swiper('.swiper-wrapper', {
    direction: 'horizontal', // or 'vertical' based on your preference
    loop: true,
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        grabCursor: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // REsponsive breakpints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        900: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 2
        }
    }
});
