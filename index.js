const inner = document.querySelector(".inner");
const mov = document.querySelector(".mov");
const general = document.querySelector(".general");
const mum = document.querySelector(".mum");

mov.addEventListener('click', () => {
    inner.style.transition = "all 0.4s ease-in-out";
    mov.classList.toggle("active");
    mum.classList.toggle("active");
})