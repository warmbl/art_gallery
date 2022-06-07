let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");
let gall = document.querySelector(".center-menu");

function open_gall() {
    gall.style.visibility = "visible";
    gall.style.animation = "up 0.5s linear 1";

    open.style.display = "none";
    close.style.display = "inline";
}

function close_gall() {
    gall.style.animation = "down 0.5s linear 1";
    window.setTimeout(function () {
        gall.style.visibility = "hidden";
    }, 450);

    open.style.display = "inline";
    close.style.display = "none";
}

open.addEventListener("click", open_gall);
close.addEventListener("click", close_gall);
