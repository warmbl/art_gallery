/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
var $menu = $(".content");

var settingsForMenu = {
    dots: false,
    arrows: false,
    slide: ".card",
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    touchThreshold: 100,

    centerPadding: "60px",
};

$menu.slick(settingsForMenu);
$menu.slick("slickGoTo", 1);
