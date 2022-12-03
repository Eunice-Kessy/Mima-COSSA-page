// slider
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".mext");
const slides = document.querySelectorAll("slide");
const numberOfSlides = slides.length;
let slideNumber = 0

nextBtn.addEventListener("click", () => {
    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
});

