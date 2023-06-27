const redButton = document.querySelector(".red");
const yellowButton = document.querySelector(".yellow");
const greenButton = document.querySelector(".green");
const offAllButton = document.querySelector(".off");
const mainImage = document.querySelector("#mainImage");

redButton.addEventListener("click", redFunction);
yellowButton.addEventListener("click", yellowFunction);
greenButton.addEventListener("click", greenFunction);
offAllButton.addEventListener("click", offFunction);

function redFunction() {
    mainImage.src = "image/red.png";
}

function yellowFunction() {
    mainImage.src = "image/yellow.png";
}

function greenFunction() {
    mainImage.src = "image/green.png";
}

function offFunction() {
    mainImage.src = "image/off.png"
}