let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");
let back = document.querySelector("body");
let blackout = document.querySelector(".blackout");
let headline = document.querySelector(".headline");
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
    headline.classList.add("headline-appearance");
    e.classList.add("menu-appearance");
};

const disappear = e => {
    headline.classList.remove("headline-appearance");
    e.classList.remove("menu-appearance");
};

function open_gall() {
    if (can_open) {
        cards.forEach(delayLoop(appear, 100));
        blackout.style.opacity = "0.8";
        open.style.display = "none";
        close.style.display = "inline";
        can_open = false;
    } else return;
}

function close_gall() {
    if (!can_open) {
        open.style.display = "inline";
        close.style.display = "none";
        cards.forEach(delayLoop(disappear, 0));
        blackout.style.opacity = "0";
        can_open = true;
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
function changeBackground(number) {
    addDiv.style.backgroundImage = `url(./images/${number}.jpg)`;
    setTimeout(() => {
        back.style.backgroundImage = `url(./imagesHD/${number}.jpg)`;
        close_gall();
        //
    }, 1000);
    setTimeout(() => {
        back.lastChild.remove();
    }, 1700);
}

async function load() {
    cards = document.querySelectorAll(".card");
    cards.forEach(crd => {
        crd.addEventListener("click", addElement);
        crd.addEventListener("click", function inf() {
            let id_back = crd.id;
            switch (id_back) {
                case "1":
                    changeBackground(id_back);
                    break;
                case "2":
                    changeBackground(id_back);
                    break;
                case "3":
                    changeBackground(id_back);
                    break;
                case "4":
                    changeBackground(id_back);
                    break;
                case "5":
                    changeBackground(id_back);
                    break;
                case "6":
                    changeBackground(id_back);
                    break;
                default:
                    back.style.backgroundImage = `url(./imagesHD/1.jpg)`;
                    break;
            }
        });
    });
    open.addEventListener("click", open_gall);
    close.addEventListener("click", close_gall);
}

window.onload = load;
