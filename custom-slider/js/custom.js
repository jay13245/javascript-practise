const hero = document.querySelector(".hero__wrapper");
const carousel = document.querySelector(".hero_carousel");
// let img = carousel.querySelectorAll(".slider__img")[0];
let button = document.querySelectorAll(".button");
card = carousel.querySelectorAll('img')[0];
let indexOfImage = 1;

let firstSlide = card.clientWidth + 16

console.log('firstSlide', firstSlide);

button.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "next" ? firstSlide : -firstSlide;
    })
})

// nextSlide = () => {
//     carousel.scrollLeft += firstSlide
// }

// prevSlide = () => {
//     carousel.scrollLeft -= firstSlide
// }