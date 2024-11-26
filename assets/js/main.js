/* =================backgorund color====================== */
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader);

// change height
// make height comparable to mockup section
const homeHeight = () => {
    const home = document.getElementById('home');
    const mockup = document.getElementById('home-mockup');

    home.style.height = `${mockup.offsetHeight + 313}px`;
}
window.addEventListener('load', homeHeight);
window.addEventListener('resize', homeHeight);

// First Swiper
var firstSwiper = new Swiper(".first-swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // on slide change event; we move image to left
    on: {
        slideChange: function () {
            const slideIndex = this.realIndex;
            const left = slideIndex === 0 ? 0.25 : slideIndex * 50;

            const mockUpImage = document.getElementById('home-mockup');
            mockUpImage.style.setProperty("--left", `${left}%`)
        }
    }
});


// second swiper - fruit images
var secondSwiper = new Swiper(".second-swiper", {
    direction: "vertical",
    loop: true,
});

// Sync Swipers
firstSwiper.controller.control = secondSwiper;


