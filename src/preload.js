/* eslint-disable no-unused-vars */
let preload;
let firstBackgroundPreload;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //console.log("Телефон");
    preload = [
        [
            "./src/imagesHD/test1/1.webp",
            "./src/imagesHD/test1/2.webp",
            "./src/imagesHD/test1/3.webp",
            "./src/imagesHD/test1/4.webp",
        ],
        [
            "./src/imagesHD/test2/1.webp",
            "./src/imagesHD/test2/2.webp",
            "./src/imagesHD/test2/3.webp",
            "./src/imagesHD/test2/4.webp",
        ],
        [
            "./src/imagesHD/test3/1.webp",
            "./src/imagesHD/test3/2.webp",
            "./src/imagesHD/test3/3.webp",
            "./src/imagesHD/test3/4.webp",
            "./src/imagesHD/test3/5.webp",
        ],
        ["./src/imagesHD/test4/1.webp", "./src/imagesHD/test4/2.webp", "./src/imagesHD/test4/3.webp"],
        [
            "./src/imagesHD/test5/1.webp",
            "./src/imagesHD/test5/2.webp",
            "./src/imagesHD/test5/3.webp",
            "./src/imagesHD/test5/4.webp",
            "./src/imagesHD/test5/5.webp",
        ],
        [
            "./src/imagesHD/test6/1.webp",
            "./src/imagesHD/test6/2.webp",
            "./src/imagesHD/test6/3.webp",
            "./src/imagesHD/test6/4.webp",
            "./src/imagesHD/test6/5.webp",
        ],
    ];
    firstBackgroundPreload = [
        "./src/imagesHD/test1/1.webp",
        "./src/imagesHD/test1/2.webp",
        "./src/imagesHD/test1/3.webp",
        "./src/imagesHD/test1/4.webp",
    ];
} else {
    //console.log("Компуктер");
    preload = [
        [
            "./src/imagesHD/test1/1.png",
            "./src/imagesHD/test1/2.png",
            "./src/imagesHD/test1/3.png",
            "./src/imagesHD/test1/4.png",
        ],
        [
            "./src/imagesHD/test2/1.png",
            "./src/imagesHD/test2/2.png",
            "./src/imagesHD/test2/3.png",
            "./src/imagesHD/test2/4.png",
            "./src/imagesHD/test2/5.gif",
        ],
        [
            "./src/imagesHD/test3/1.png",
            "./src/imagesHD/test3/2.png",
            "./src/imagesHD/test3/3.png",
            "./src/imagesHD/test3/4.png",
            "./src/imagesHD/test3/5.png",
        ],
        ["./src/imagesHD/test4/1.png", "./src/imagesHD/test4/2.png", "./src/imagesHD/test4/3.png"],
        [
            "./src/imagesHD/test5/1.png",
            "./src/imagesHD/test5/2.png",
            "./src/imagesHD/test5/3.png",
            "./src/imagesHD/test5/4.png",
            "./src/imagesHD/test5/5.png",
        ],
        [
            "./src/imagesHD/test6/1.png",
            "./src/imagesHD/test6/2.png",
            "./src/imagesHD/test6/3.png",
            "./src/imagesHD/test6/4.png",
            "./src/imagesHD/test6/5.png",
        ],
    ];
    firstBackgroundPreload = [
        "./src/imagesHD/test1/1.png",
        "./src/imagesHD/test1/2.png",
        "./src/imagesHD/test1/3.png",
        "./src/imagesHD/test1/4.png",
    ];
}
