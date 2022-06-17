let open = document.querySelector(".open-gallery");
let close = document.querySelector(".close-gallery");
let back = document.querySelector("body");
let blackout = document.querySelector(".blackout");
let headline = document.querySelector(".headline");
let parallax = document.querySelector(".back-parallax");
let bg_image = document.querySelector(".bg-image");
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

function changeBackground(count) {
    addDiv.style.backgroundImage = `url(./images/${count}.jpg)`;
    setTimeout(() => {
        parallax.innerHTML = "";
        for (let i = 0; i < preload[count - 1].length; i++) {
            //console.log(preload[count - 1].length);
            layer = document.createElement("img");
            layer.classList.add("parallax");
            //layer.src = `./imagesHD/test${id}/${i}.png`;
            layer.src = preload[count - 1][i];
            parallax.appendChild(layer);
        }
        close_gall();
        bg_image.style.backgroundImage = `url(./images/${count}.jpg)`;
    }, 1000);
    setTimeout(() => {
        back.lastChild.remove();
    }, 2000);
}

var preload = [
    [
        "./imagesHD/test1/1.png",
        "./imagesHD/test1/2.png",
        "./imagesHD/test1/3.png",
        "./imagesHD/test1/4.png",
    ],
    [
        "./imagesHD/test2/1.png",
        "./imagesHD/test2/2.png",
        "./imagesHD/test2/3.png",
        "./imagesHD/test2/4.png",
    ],
    [
        "./imagesHD/test3/1.png",
        "./imagesHD/test3/2.png",
        "./imagesHD/test3/3.png",
        "./imagesHD/test3/4.png",
        "./imagesHD/test3/5.png",
    ],
    ["./imagesHD/test4/1.png", "./imagesHD/test4/2.png", "./imagesHD/test4/3.png"],
    [
        "./imagesHD/test5/1.png",
        "./imagesHD/test5/2.png",
        "./imagesHD/test5/3.png",
        "./imagesHD/test5/4.png",
    ],
    [
        "./imagesHD/test6/1.png",
        "./imagesHD/test6/2.png",
        "./imagesHD/test6/3.png",
        "./imagesHD/test6/4.png",
        "./imagesHD/test6/5.png",
    ],
];
function preloader() {
    var images = [];
    for (var i = 0; i < preload.length; i++) {
        for (var j = 0; j < preload[i].length; j++) {
            images[j] = new Image();
            images[j].src = preload[i][j];
        }
    }
    //console.log(preload);
}
preloader();
//console.log(preload[2]);

async function load() {
    // Изначально загружается первый арт (test1)
    for (let i = 0; i <= 3; i++) {
        layer = document.createElement("img");
        layer.classList.add("parallax");
        //layer.src = `./imagesHD/test1/${i}.png`;
        layer.src = `${preload[0][i]}`;
        parallax.appendChild(layer);
    }
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
                    back.style.backgroundColor = "red";
                    break;
            }
        });
    });
    open.addEventListener("click", open_gall);
    close.addEventListener("click", close_gall);
}

window.onload = load;
