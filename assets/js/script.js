const slides = document.querySelectorAll(".slider .slide")
const dots = document.querySelector(".slider .dots")
const left = document.querySelector(".slider .left")
const right = document.querySelector(".slider .right")
console.log(left , right)

for (let i = 0; i < slides.length-2; i++) {
        dots.innerHTML += `<span class="dote ${(i==0) ? "active" : ""}" onclick="sliderMovment(${i})" id="dote${i}"></span>`
/* 
    dots.innerHTML += (i==0) ? `<span class="dote active" onclick="sliderMovment(${i})" id="dote${i}"></span>` :`<span class="dote" onclick="sliderMovment(${i})" id="dote${i}"></span>` */
}

/* arrow function */
const sliderMovment = (index) => {
    const dote = document.querySelector(`.slider #dote${index}`)
    const dotes = document.querySelectorAll(`.slider .dots .dote`)
    for (let i = 0; i < dotes.length; i++) {
        dotes[i].classList.remove("active")
    }
    dote.classList.add("active")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(calc(-${index * 100}% - ${index * 4}vw))`
    }
}

/* function sliderMovment(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(calc(-${index * 100}% - ${index * 4}vw))`
    }
} */

left.addEventListener("click" , ()=>{
    const activeDote = document.querySelector(".slider .active")
    const dotes = document.querySelectorAll(`.slider .dots .dote`)
    const doteId = activeDote.id
    const index = (activeDote.id[doteId.length-1] == dotes.length-1) ? 0 : parseInt(doteId[doteId.length-1]) + 1
    const nextDoteId = "dote" + index
    const nextDote = document.querySelector(`.slider #${nextDoteId}`)
    nextDote.click()
})

right.addEventListener("click" , ()=>{
    const activeDote = document.querySelector(".slider .active")
    const dotes = document.querySelectorAll(`.slider .dots .dote`)
    const doteId = activeDote.id
    const index = (activeDote.id[doteId.length-1] == "0") ? dotes.length-1 :  parseInt(doteId[doteId.length-1]) - 1
    const nextDoteId = "dote" + index
    const nextDote = document.querySelector(`.slider #${nextDoteId}`)
    nextDote.click()
})