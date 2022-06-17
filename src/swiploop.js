// Scroll update
let doc = window.document,
    slider = doc.querySelector(".js-slider"),
    items = doc.querySelectorAll(".js-item"),
    clones = [],
    disableScroll = false,
    scrollWidth = 0,
    scrollPos = 0,
    clonesWidth = 0;

// Позиция по горизонтали
function getScrollPos() {
    return (slider.pageXOffset || slider.scrollLeft) - (slider.clientLeft || 0);
}

function setScrollPos(pos) {
    slider.scrollLeft = pos;
}

// Ширина копий элементов
function getClonesWidth() {
    clonesWidth = 0;
    Array.from(clones, clone => {
        clonesWidth = clonesWidth + clone.offsetWidth;
    });
    return clonesWidth;
}

function reCalc() {
    scrollPos = getScrollPos();
    scrollWidth = slider.scrollWidth;
    clonesWidth = getClonesWidth();

    if (scrollPos <= 0) {
        setScrollPos(1);
    }
}

// Бесконечная прокрутка
function scrollUpdate() {
    if (!disableScroll) {
        scrollPos = getScrollPos();
        if (clonesWidth + scrollPos >= scrollWidth) {
            // Прокрутка влево, когда доберется до правого края
            setScrollPos(1);
            disableScroll = true;
        } else if (scrollPos <= 0) {
            // Прокрутка вправо, когда доберется до левого края
            setScrollPos(scrollWidth - clonesWidth);
            disableScroll = true;
        }
    }
    if (disableScroll) {
        window.setTimeout(function () {
            disableScroll = false;
        }, 40);
    }
}

// Draggable slider
let isDown = false;
let startX;
let scrollLeft;

// прекратить действие, когда клик отпущен
const end = () => {
    isDown = false;
    slider.classList.remove("active");
};

// начать действие
const start = e => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const move = e => {
    scrollPos = getScrollPos();
    if (!isDown) return;
    e.preventDefault(); // предотвращение события
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = x - startX;
    slider.scrollLeft = scrollLeft - dist;

    if (scrollPos == -1 || scrollPos == 0) {
        //console.log(scrollPos + " Нулевое значение - Левая граница");
        setScrollPos(scrollWidth - clonesWidth);
        scrollLeft = slider.scrollLeft + dist;
    } else if (clonesWidth + scrollPos >= scrollWidth) {
        //console.log(scrollPos + " Больше нуля - Правая граница");
        setScrollPos(1);
        scrollLeft = slider.scrollLeft + dist;
    }
};

// Wheel move
let scrollWheel = slider.scrollLeft;
function wheelMove(ev) {
    scrollPos = getScrollPos();

    let what = ev.deltaY;
    scrollWheel = slider.scrollLeft;
    //console.log(what);
    if (what == -125) {
        //console.log("скрол вверх");
        slider.scrollLeft = scrollWheel - 90;
    } else if (what == 125) {
        //console.log("скрол вниз");
        slider.scrollLeft = scrollWheel + 90;
    }
}

// Выполняется при загрузке страницы
function onLoad() {
    // Подгрузка изображений из папки
    let images = [...document.querySelectorAll(".img-div")]; //
    images.forEach((image, idx) => {
        image.style.backgroundImage = `url(./images/${idx + 1}.jpg)`;
    });

    Array.from(items, item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
        clone.classList.add("js-clone");
    });
    clones = slider.querySelectorAll(".js-clone");

    reCalc();

    slider.addEventListener(
        "scroll",
        function () {
            window.requestAnimationFrame(scrollUpdate);
        },
        false,
    );
    window.addEventListener(
        "resize",
        function () {
            window.requestAnimationFrame(reCalc);
        },
        false,
    );
    // Управление мышью и слайдером
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);
    //slider.addEventListener('keydown', move);

    slider.addEventListener("mousemove", move); // работает при каждом сдвиге курсора на пиксель
    slider.addEventListener("touchmove", move);
    slider.addEventListener("keypress", move);

    slider.addEventListener("wheel", wheelMove); // колесо мышки (плюс слайдер вверх/вниз)

    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
    //slider.addEventListener('keyup', end);
}

window.addEventListener("load", onLoad);
