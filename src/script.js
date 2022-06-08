let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");

let center_menu = document.querySelector(".center-menu");
let text = document.querySelector(".headline");
let menu_item;

let can_open = true;

//let cln;

//let cln = document.querySelectorAll(".js-clone");
//console.log(cln);

//let clons = sldr.querySelectorAll(".js-clone");
//console.log(clons);

const delayLoop = (fn, delay) => {
    return (x, i) => {
        setTimeout(() => {
            fn(x);
        }, i * delay);
    };
};

const appear = e => {
    e.style.visibility = "visible";
    e.style.animation = "appearance 0.3s linear 1";
};

const disappear = e => {
    e.style.animation = "disappearance 0.3s linear 1";
    setTimeout(() => {
        e.style.visibility = "hidden";
    }, 100);
};

//console.log(clons);
function open_gall() {
    if (can_open) {
        text.style.visibility = "visible";
        text.style.animation = "up 0.3s linear 1";
        //
        menu_item.forEach(delayLoop(appear, 100));
        console.log(menu_item);
        setTimeout(() => {
            center_menu.style.visibility = "visible";
        }, 500);

        open.style.display = "none";
        close.style.display = "inline";
        can_open = false;
    } else return;
}

function close_gall() {
    if (!can_open) {
        center_menu.style.visibility = "hidden";
        //
        setTimeout(() => {
            text.style.animation = "down 0.4s linear 1";
        }, 100);
        setTimeout(() => {
            text.style.visibility = "hidden";
        }, 500);
        menu_item.forEach(delayLoop(disappear, 100));

        open.style.display = "inline";
        close.style.display = "none";
        can_open = true;
    } else return;
}

function load() {
    menu_item = center_menu.querySelectorAll(".slider-item");
    //console.log(menu_item);
    //cln.style.visibility = "hidden";
    open.addEventListener("click", open_gall);
    close.addEventListener("click", close_gall);
}

window.addEventListener("load", load);
