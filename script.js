let button = document.querySelector(".button");
let tlo = document.querySelector(".tlo");
let themeName = document.querySelector(".themeName");


button.addEventListener("click", () => {
    tlo.classList.toggle("dark");

    if (tlo.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});