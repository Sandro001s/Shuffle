let random = document.querySelector(".dice");
let display = document.querySelector(".display");
let display2 = document.querySelector(".display2");
let body = document.querySelector("body");
let btn = document.querySelector(".darkmode");

btn.addEventListener("click", () => {
    body.classList.toggle("white");
})

random.addEventListener("click", () => {
    display.classList.toggle("display2");
    display2.classList.toggle("display2");
})