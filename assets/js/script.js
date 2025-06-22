const slides = document.querySelectorAll(".slider .slide")
const dots = document.querySelector(".slider .dots")

for (let i = 0; i < slides.length-2; i++) {
    dots.innerHTML += `<span class="dote" onclick="sliderMovment(${i})"></span>`
}

function sliderMovment(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(calc(-${index * 100}% - ${index * 4}vw))`
    }
}
