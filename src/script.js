let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");
let center_menu = document.querySelector(".center-menu");
let menu_item;
let can_open = true;

// Функция для анимации массива элементов с задержкой
const delayLoop = (fn, delay) => {
    return (x, i) => {
        setTimeout(() => {
            fn(x);
        }, i * delay - 30 * i);
    };
};

const appear = e => {
    setTimeout(() => {
        e.style.visibility = "visible";
    }, 100);
    e.style.animation = "appearance 0.3s linear 1";
};

const disappear = e => {
    e.style.visibility = "hidden";
    setTimeout(() => {
        e.style.animation = "disappearance 0.3s linear 1";
    }, 300);
};

function open_gall() {
    if (can_open) {
        //
        menu_item.forEach(delayLoop(appear, 100));
        console.log(menu_item);
        setTimeout(() => {
            center_menu.style.visibility = "visible";
        }, 400);

        setTimeout(() => {
            open.style.display = "none";
            close.style.display = "inline";
            can_open = false;
        }, 700);
    } else return;
}

function close_gall() {
    if (!can_open) {
        menu_item.forEach(delayLoop(disappear, 50));
        setTimeout(() => {
            center_menu.style.visibility = "hidden";
        }, 500);
        setTimeout(() => {
            open.style.display = "inline";
            close.style.display = "none";
            can_open = true;
        }, 200);
    } else return;
}

function load() {
    menu_item = center_menu.querySelectorAll(".slider-item");
    open.addEventListener("click", open_gall);
    close.addEventListener("click", close_gall);
}

window.addEventListener("load", load);
