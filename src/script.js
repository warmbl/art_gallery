let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");
let back = document.querySelector("body");
let blackout = document.querySelector(".blackout");
let headline = document.querySelector(".headline");
let parallax = document.querySelector(".back-parallax");
let layer;
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
    sDiv.height = "100%";
    sDiv.width = "100%";
    sDiv.backgroundSize = "110vw auto";
    sDiv.backgroundPosition = "center";

    sDiv.left = e.clientX - maxValue / 2 + "px";
    sDiv.top = e.clientY - maxValue / 2 + "px";
    let f = e.clientX + "px";
    let s = e.clientY + "px";

    addDiv.classList.add("circle");
    addDiv.style.clipPath = "circle(1% at " + f + " " + s + ")";
    setTimeout(() => {
        addDiv.style.clipPath = "circle(150% at " + f + " " + s + ")";
    }, 1);
}

function changeBackground(folder, count) {
    addDiv.style.backgroundImage = `url(./images/${folder}.jpg)`;
    setTimeout(() => {
        parallax.innerHTML = "";
        for (let i = 1; i <= count; i++) {
            layer = document.createElement("img");
            layer.classList.add("parallax");
            layer.src = `./imagesHD/test${folder}/${i}.png`;
            parallax.appendChild(layer);
        }
        close_gall();
        //
    }, 1000);
    setTimeout(() => {
        back.lastChild.remove();
    }, 2000);
}
/*
function preloader() {
    var preload = [
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/3.jpg",
        "./images/4.jpg",
        "./images/5.jpg",
        "./images/6.jpg",
    ];
    var images = [];
    for (var i = 0; i < preload.length; i++) {
        images[i] = new Image();
        images[i].src = preload[i];
    }
    alert("Изображения загружены");
}
*/

async function load() {
    //preloader();
    // Изначально загружается первый арт (test1)
    for (let i = 1; i <= 4; i++) {
        layer = document.createElement("img");
        layer.classList.add("parallax");
        layer.src = `./imagesHD/test1/${i}.png`;
        parallax.appendChild(layer);
    }

    cards = document.querySelectorAll(".card");
    cards.forEach(crd => {
        crd.addEventListener("click", addElement);
        crd.addEventListener("click", function inf() {
            let id_back = crd.id;
            switch (id_back) {
                case "1":
                    changeBackground(id_back, 4);
                    break;
                case "2":
                    changeBackground(id_back, 4);
                    break;
                case "3":
                    changeBackground(id_back, 5);
                    break;
                case "4":
                    changeBackground(id_back, 3);
                    break;
                case "5":
                    changeBackground(id_back, 4);
                    break;
                case "6":
                    changeBackground(id_back, 5);
                    break;
                default:
                    back.style.backgroundColor = "red";
                    break;
            }
        });
    });
    open.addEventListener("click", open_gall);
    close.addEventListener("click", close_gall);
}

window.onload = load;
