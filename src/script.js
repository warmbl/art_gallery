let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");
let center_menu = document.querySelector(".center-menu");
let back = document.querySelector("body");
let blackout = document.querySelector(".blackout");
let menu_item;
let can_open = true;
let cards;
let addDiv;

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
        blackout.style.opacity = "0.8";
        //console.log(menu_item);
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

function close_gall(closeTime) {
    if (!can_open) {
        switch (closeTime) {
            case "together":
                setTimeout(() => {
                    menu_item.forEach(delayLoop(disappear, 10));
                    //menu_item.forEach(off);
                }, 800);
                break;
            default:
                menu_item.forEach(delayLoop(disappear, 50));
                break;
        }
        setTimeout(() => {
            center_menu.style.visibility = "hidden";
        }, 500);
        setTimeout(() => {
            open.style.display = "inline";
            close.style.display = "none";
            blackout.style.opacity = "0";
            can_open = true;
        }, 200);
    } else return;
}

// Анимационный круг (боже, храни эту функцию)
function addElement(e) {
    addDiv = document.createElement("div");
    let maxValue = Math.max(back.clientWidth, back.clientHeight),
        sDiv = addDiv.style;
    back.appendChild(addDiv);
    sDiv.width = sDiv.height = maxValue + "px";
    sDiv.left = e.clientX - maxValue / 2 + "px";
    sDiv.top = e.clientY - maxValue / 2 + "px";
    let f = e.clientX + "px";
    let s = e.clientY + "px";

    addDiv.classList.add("circle");
    addDiv.style.clipPath = "circle(1% at " + f + " " + s + ")";
    setTimeout(() => {
        addDiv.style.clipPath = "circle(110% at " + f + " " + s + ")";
    }, 1);
}
function deleteElement() {
    setTimeout(() => {
        back.lastChild.remove();
    }, 1400);
}

function load() {
    menu_item = center_menu.querySelectorAll(".slider-item");
    cards = document.querySelectorAll(".card");
    cards.forEach(crd => {
        crd.addEventListener("click", addElement);
        crd.addEventListener("click", function inf() {
            //console.log("Вы выбрали карточку: №", crd.id);
            let id_back = crd.id;
            switch (id_back) {
                case "1":
                    deleteElement();
                    addDiv.style.backgroundImage = `url(./images/${id_back}.jpg)`;
                    setTimeout(() => {
                        back.style.backgroundImage = `url(./imagesHD/${id_back}.jpg)`;
                    }, 1000);
                    break;
                case "2":
                    deleteElement();
                    addDiv.style.backgroundImage = `url(./images/${id_back}.jpg)`;
                    setTimeout(() => {
                        back.style.backgroundImage = `url(./imagesHD/${id_back}.jpg)`;
                    }, 1000);
                    break;
                case "3":
                    deleteElement();
                    addDiv.style.backgroundImage = `url(./images/${id_back}.jpg)`;
                    setTimeout(() => {
                        back.style.backgroundImage = `url(./imagesHD/${id_back}.jpg)`;
                    }, 1000);
                    break;
                case "4":
                    deleteElement();
                    addDiv.style.backgroundImage = `url(./images/${id_back}.jpg)`;
                    setTimeout(() => {
                        back.style.backgroundImage = `url(./imagesHD/${id_back}.jpg)`;
                    }, 1000);
                    break;
                case "5":
                    deleteElement();
                    addDiv.style.backgroundImage = `url(./images/${id_back}.jpg)`;
                    setTimeout(() => {
                        back.style.backgroundImage = `url(./imagesHD/${id_back}.jpg)`;
                    }, 1000);
                    break;
                case "6":
                    deleteElement();
                    addDiv.style.backgroundImage = `url(./images/${id_back}.jpg)`;
                    setTimeout(() => {
                        back.style.backgroundImage = `url(./imagesHD/${id_back}.jpg)`;
                    }, 1000);
                    break;
                default:
                    back.style.backgroundImage = `url(./imagesHD/1.jpg)`;
                    break;
            }
            close_gall("together");
        });
    });
    open.addEventListener("click", open_gall);
    close.addEventListener("click", close_gall);
}

window.addEventListener("load", load);
