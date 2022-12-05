// slider
let slideIndex = 0;
showSliders();

function showSliders(){
    let i;
    const  slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByTagName("span");


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = slideIndex + 1;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSliders, 3000);
}
