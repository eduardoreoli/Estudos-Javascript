// var banner = document.querySelector(".banner");
// var mergulhador = document.querySelector(".mergulhador");

// window.addEventListener("scroll", function () {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     var mergulhadorPosition =
//         scrollTop / 4; /* define a velocidade do movimento do mergulhador */

//     mergulhador.style.bottom = mergulhadorPosition + "px";
// });

var banner = document.querySelector(".banner");
var mergulhador = document.querySelector(".mergulhador img");

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var mergulhadorPosition = scrollTop / 9;
    var mergulhadorScale = 1 - scrollTop / (banner.offsetHeight / 0.5);
    var mergulhadorTop =
        scrollTop / 2; /* define a posição vertical do mergulhador */

    mergulhador.style.bottom = mergulhadorPosition + "px";
    mergulhador.style.transform = "scale(" + mergulhadorScale + ")";
    mergulhador.style.top = mergulhadorTop + "px";
});

var banner = document.querySelector(".banner");
var ocean = document.querySelector(".ocean");
var wave1 = document.querySelector(".wave:nth-child(1)");
var wave2 = document.querySelector(".wave:nth-child(2)");

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var oceanTop = scrollTop / 2; /* define a posição vertical do oceano */

    ocean.style.top = oceanTop + "px";
});
