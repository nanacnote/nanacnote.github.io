// collection of elements needed to be manipulated
var popupBox = document.getElementById("hidden-popup-boxes");
var navSection = document.getElementById("nav-section");
var body = document.getElementsByTagName("body");
var aboutLink = document.getElementsByClassName("rec-links");
var aboutBox = document.getElementsByClassName("about-box");
var aboutBoxClose = document.querySelector(".about-box-close")

aboutLink[0].addEventListener("mouseover", showAboutMenu);
aboutBoxClose.addEventListener("click", hideAboutMenu);

function showAboutMenu(){
    popupBox.setAttribute("style", "display: block");
    aboutBox[0].classList.add("open-about");
}

function hideAboutMenu(){
    popupBox.setAttribute("style", "display: none");
    aboutBox[0].classList.remove("open-about");
}